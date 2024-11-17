import { TRPCError } from '@trpc/server';
import { router, publicProcedure, protectedProcedure } from './trpc';
import { db } from '@/db';
import { z } from 'zod';
import { INFINITE_QUERY_LIMIT } from '@/config/config';
import {
  getUserSubscriptionPlan,
  stripe,
} from '@/lib/stripe'
import { PLANS } from '@/config/stripe'
import { absoluteUrl } from '@/lib/utils';
import { auth } from '@/lib/auth';

export const appRouter = router({
  authCallback: publicProcedure.query(async () => {
    const user = await auth()

    if (!user.id || !user.email) {
      throw new TRPCError({
        code: 'UNAUTHORIZED',
        message: 'User not found',
      });
    }

    // check if user already exists in db
    const dbUser = await db.user.findUnique({
      where: {
        id: user.id,
      },
    });

    if (!dbUser) {
      // create user in db
      await db.user.create({
        data: {
          id: user.id,
          email: user.email,
        },
      });
    }

    return { success: true };
  }),

  createStripeSession: protectedProcedure
    .input(
      z.object({
        planId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { userId } = ctx;
      const billingUrl = absoluteUrl('/dashboard/billing')

      if (!userId) throw new TRPCError({ code: 'UNAUTHORIZED' });
      
      const dbUser = await db.user.findFirst({
        where: {
          id: userId,
        },
      })

      if (!dbUser)
        throw new TRPCError({ code: 'UNAUTHORIZED' })

      const subscriptionPlan = await getUserSubscriptionPlan()

      if (subscriptionPlan?.isSubscribed && dbUser.stripeCustomerId) {
        const stripeSession = await stripe.billingPortal.sessions.create({
          customer: dbUser.stripeCustomerId,
          return_url: billingUrl,
        })

        return { url: stripeSession.url }
      }

      const selectedPlan = PLANS.find(
        (plan) => plan.slug === input.planId
      )

      if (!selectedPlan) {
        console.log('Plan not found:', input.planId)
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Invalid plan selected'
        })
      }

      const stripeSession = await stripe.checkout.sessions.create({
        success_url: billingUrl,
        cancel_url: billingUrl,
        payment_method_types: ['card', 'paypal'],
        mode: 'subscription',
        billing_address_collection: 'auto',
        line_items: [
          {
            price: process.env.NODE_ENV === 'production' 
              ? selectedPlan.price.priceIds.production 
              : selectedPlan.price.priceIds.test,
            quantity: 1,
          },
        ],
        metadata: {
          userId: userId,
        },
      })

      return { url: stripeSession.url }
    }),

  getUserNotebooks: protectedProcedure.query(async ({ ctx }) => {
    const { userId } = ctx;

    return await db.notebook.findMany({
      where: {
        userId,
      },
    });
  }),
  getNotebook: protectedProcedure
    .input(z.object({ key: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { userId } = ctx;

      const notebook = await db.notebook.findFirst({
        where: {
          key: input.key,
          userId,
        },
      });

      if (!notebook) throw new TRPCError({ code: 'NOT_FOUND', message: 'Notebook not found' });

      return notebook;
  }),
  deleteNotebook: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { userId } = ctx;

      const notebook = await db.notebook.findFirst({
        where: {
          id: input.id,
          userId,
        },
      });

      if (!notebook) throw new TRPCError({ code: 'NOT_FOUND', message: 'Notebook not found' });

      await db.notebook.delete({
        where: {
          id: input.id,
        },
      });

      return notebook;
    }),
  getUserFiles: protectedProcedure.query(async ({ ctx }) => {
    const { userId } = ctx;

    return await db.file.findMany({
      where: {
        userId,
      },
    });
  }),
  getFile: protectedProcedure
    .input(z.object({ key: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { userId } = ctx;

      const file = await db.file.findFirst({
        where: {
          key: input.key,
          userId,
        },
      });

      if (!file) throw new TRPCError({ code: 'NOT_FOUND', message: 'File not found' });

      return file;
  }),
  getFileUploadStatus: protectedProcedure
    .input(z.object({ fileId: z.string() }))
    .query(async ({ ctx, input }) => {
      const file = await db.file.findFirst({
        where: {
          id: input.fileId,
          userId: ctx.userId,
        },
      });

      if (!file) return { status: 'PENDING' as const };

      return { status: file.uploadStatus };
  }),
  getFileMessages: protectedProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).nullish(),
        cursor: z.string().nullish(),
        fileId: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { userId } = ctx
      const { fileId, cursor } = input
      const limit = input.limit ?? INFINITE_QUERY_LIMIT

      const file = await db.file.findFirst({
        where: {
          id: fileId,
          userId,
        },
      })

      if (!file) throw new TRPCError({ code: 'NOT_FOUND' })

      const messages = await db.message.findMany({
        take: limit + 1,
        where: {
          fileId,
        },
        orderBy: {
          createdAt: 'desc',
        },
        cursor: cursor ? { id: cursor } : undefined,
        select: {
          id: true,
          isUserMessage: true,
          createdAt: true,
          text: true,
        },
        skip: cursor ? 1 : 0,
      })

      let nextCursor: typeof cursor | undefined = undefined
      if (messages.length > limit) {
        const nextItem = messages.pop()
        nextCursor = nextItem?.id
      }

      return {
        messages,
        nextCursor,
      }
    }),
  // To be used
  // getFileSummary: protectedProcedure
  //   .input(z.object({ fileId: z.string() }))
  //   .query(async ({ ctx, input }) => {
  //     const { userId } = ctx;
  //     const { fileId } = input;
  //   }),
  deleteFile: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { userId } = ctx;

      const file = await db.file.findFirst({
        where: {
          id: input.id,
          userId,
        },
      });

      if (!file) throw new TRPCError({ code: 'NOT_FOUND', message: 'File not found' });

      await db.file.delete({
        where: {
          id: input.id,
        },
      });

      return file;
  }),
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;