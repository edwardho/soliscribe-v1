import { auth } from '@/lib/auth';
import { initTRPC, TRPCError } from '@trpc/server';
 
/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.create();
const middleware = t.middleware;
const isAuth = middleware(async (opts) => {
    const user = await auth()

    if (!user || !user.id) {
        throw new TRPCError({ code: 'UNAUTHORIZED', message: 'User is not logged in' })
    }

    return opts.next({
        ctx: {
            userId: user.id,
            user,
        }
    })
})
 
/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const router = t.router;
export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(isAuth);