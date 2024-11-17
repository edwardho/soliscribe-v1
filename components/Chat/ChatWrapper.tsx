'use client'

import { trpc } from '@/app/_trpc/client'
import ChatInput from './ChatInput'
import Messages from './Messages'
import { ChevronLeft, Loader2, XCircle } from 'lucide-react'
import Link from 'next/link'
import { buttonVariants } from '../ui/button'
import { ChatContextProvider } from './ChatContext'

interface ChatWrapperProps {
  fileId: string
  isSubscribed: boolean
}

const ChatWrapper = ({
  fileId,
  // to be used
  // isSubscribed,
}: ChatWrapperProps) => {
  const { data, isLoading } =
    trpc.getFileUploadStatus.useQuery(
      {
        fileId,
      },
      {
        refetchInterval: (query) =>
          query.state.data?.status === 'SUCCESS' ||
          query.state.data?.status === 'FAILED'
            ? false
            : 500,
      }
    )

  if (isLoading)
    return (
      <div className='relative min-h-full bg-background flex flex-col justify-between'>
        <div className='flex-1 flex justify-center items-center'>
          <div className='flex flex-col items-center gap-2'>
            <Loader2 className='h-8 w-8 text-muted-foreground animate-spin' />
            <h3 className='font-semibold text-xl text-foreground'>
              Loading...
            </h3>
            <p className='text-muted-foreground text-sm'>
              We&apos;re loading your PDF.
            </p>
          </div>
        </div>
        <div className='absolute bottom-0 left-0 w-full'>
          <div className='bg-background/80 backdrop-blur-sm py-40 px-8'>
            <ChatInput isDisabled />
          </div>
        </div>
      </div>
    )

  if (data?.status === 'PROCESSING')
    return (
      <div className='relative min-h-full bg-background flex flex-col justify-between'>
        <div className='flex-1 flex justify-center items-center'>
          <div className='flex flex-col items-center gap-2'>
            <Loader2 className='h-8 w-8 text-muted-foreground animate-spin' />
            <h3 className='font-semibold text-xl text-foreground'>
              Processing PDF...
            </h3>
            <p className='text-muted-foreground text-sm'>
              This won&apos;t take long.
            </p>
          </div>
        </div>
        <div className='absolute bottom-0 left-0 w-full'>
          <div className='bg-background/80 backdrop-blur-sm py-40 px-8'>
            <ChatInput isDisabled />
          </div>
        </div>
      </div>
    )

  if (data?.status === 'FAILED')
    return (
      <div className='relative min-h-full bg-background flex flex-col justify-between'>
        <div className='flex-1 flex justify-center items-center'>
          <div className='flex flex-col items-center gap-2'>
            <XCircle className='h-8 w-8 text-destructive' />
            <h3 className='font-semibold text-xl text-foreground'>
              Too many pages in PDF
            </h3>
            {/* <p className='text-muted-foreground text-sm'>
              Your{' '}
              <span className='font-medium'>
                {isSubscribed ? 'Pro' : 'Free'}
              </span>{' '}
              plan supports up to{' '}
              {isSubscribed
                ? PLANS.find((p) => p.name === 'Pro')
                    ?.pagesPerPdf
                : PLANS.find((p) => p.name === 'Free')
                    ?.pagesPerPdf}{' '}
              pages per PDF.
            </p> */}
            <Link
              href='/dashboard'
              className={buttonVariants({
                variant: 'secondary',
                className: 'mt-4',
              })}>
              <ChevronLeft className='h-3 w-3 mr-1.5' />
              Back
            </Link>
          </div>
        </div>
        <div className='absolute bottom-0 left-0 w-full'>
          <div className='bg-background/80 backdrop-blur-sm py-40 px-8'>
            <ChatInput isDisabled />
          </div>
        </div>
      </div>
    )

  return (
    <ChatContextProvider fileId={fileId}>
      <div className='relative h-full bg-background flex flex-col justify-between border border-border'>
        <div className='flex-1 overflow-y-auto'>
          <Messages fileId={fileId} />
        </div>
        <div className='sticky bottom-0 left-0 w-full'>
          <div className='bg-background/80 backdrop-blur-sm py-20 px-8 pt-24'>
            <ChatInput />
          </div>
        </div>
      </div>
    </ChatContextProvider>
  )
}

export default ChatWrapper