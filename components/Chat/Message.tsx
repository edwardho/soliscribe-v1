import { cn } from '@/lib/utils'
import { ExtendedMessage } from '@/types/message'
import { format } from 'date-fns'
import { forwardRef } from 'react'
import ReactMarkdown from 'react-markdown'
import { Button } from '../ui/button'
import { Copy, User } from 'lucide-react'
import Image from 'next/image'

interface MessageProps {
  message: ExtendedMessage
  isNextMessageSamePerson: boolean
}

const Message = forwardRef<HTMLDivElement, MessageProps>(
  ({ message, isNextMessageSamePerson }, ref) => {
    const copyToClipboard = () => {
      if (typeof message.text === 'string') {
        navigator.clipboard.writeText(message.text)
        // Optionally, add a toast notification here
      }
    }

    return (
      <div
        ref={ref}
        className={cn('flex items-end', {
          'justify-end': message.isUserMessage,
        })}>
        <div
          className={cn(
            'relative flex h-6 w-6 aspect-square items-center justify-center',
            {
              'order-2 bg-primary rounded-sm': message.isUserMessage,
              'order-1 bg-secondary rounded-sm': !message.isUserMessage,
              invisible: isNextMessageSamePerson,
            }
          )}>
          {message.isUserMessage ? (
            <User className='fill-primary-foreground text-primary-foreground h-3/4 w-3/4' />
          ) : (
            <Image src="/images/logo/logo.svg" alt="Logo" width={24} height={24} className="h-3/4 w-3/4" />
          )}
        </div>

        <div
          className={cn(
            'flex flex-col space-y-2 text-base max-w-xl mx-2',
            {
              'order-1 items-end': message.isUserMessage,
              'order-2 items-start': !message.isUserMessage,
            }
          )}>
          <div
            className={cn(
              'px-4 py-2 rounded-lg inline-block relative',
              {
                'bg-primary text-primary-foreground': message.isUserMessage,
                'bg-secondary text-secondary-foreground': !message.isUserMessage,
                'rounded-br-none':
                  !isNextMessageSamePerson && message.isUserMessage,
                'rounded-bl-none':
                  !isNextMessageSamePerson && !message.isUserMessage,
              }
            )}>
            {!message.isUserMessage && message.id !== 'loading-message' && (
              <Button
                onClick={copyToClipboard}
                size='icon'
                variant='ghost'
                className='absolute top-1 right-1 h-6 w-6 p-0 hover:bg-secondary-foreground/10'
              >
                <Copy className='h-3 w-3' />
              </Button>
            )}
            {typeof message.text === 'string' ? (
              <ReactMarkdown
                components={{
                  p: ({ children }) => <p className="mb-2">{children}</p>,
                  h1: ({ children }) => <h1 className="text-2xl font-bold mb-4">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-xl font-bold mb-3">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-lg font-bold mb-2">{children}</h3>,
                  ul: ({ children }) => <ul className="list-disc pl-4 mb-2">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal pl-4 mb-2">{children}</ol>,
                  li: ({ children }) => <li className="mb-1">{children}</li>,
                  code: ({ children }) => <code className="bg-gray-100 dark:bg-gray-800 rounded px-1">{children}</code>,
                  pre: ({ children }) => <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded mb-2 overflow-x-auto">{children}</pre>,
                  blockquote: ({ children }) => <blockquote className="border-l-4 border-gray-300 pl-4 italic">{children}</blockquote>,
                }}
                className={cn('prose max-w-none', {
                  'text-primary-foreground prose-headings:text-primary-foreground prose-p:text-primary-foreground prose-strong:text-primary-foreground': message.isUserMessage,
                  'text-secondary-foreground prose-headings:text-secondary-foreground prose-p:text-secondary-foreground prose-strong:text-secondary-foreground': !message.isUserMessage,
                })}>
                {message.text}
              </ReactMarkdown>
            ) : (
              message.text
            )}
            {message.id !== 'loading-message' ? (
              <div
                className={cn(
                  'text-xs select-none mt-2 w-full text-right',
                  {
                    'text-secondary-foreground/75': !message.isUserMessage,
                    'text-primary-foreground/75': message.isUserMessage,
                  }
                )}>
                {format(new Date(message.createdAt), 'M/d/yy h:mm a')}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
)

Message.displayName = 'Message'

export default Message
