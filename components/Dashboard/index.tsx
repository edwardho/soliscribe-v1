'use client'

import React, { useState } from 'react'
import {
    Ghost,
    Loader2,
    Plus,
    Trash,
  } from 'lucide-react'
import UploadButton from './UploadButton'
import { trpc } from '@/app/_trpc/client'
import Skeleton from 'react-loading-skeleton'
import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'
import { Button } from '@/components/ui/button'
import { getUserSubscriptionPlan } from '@/lib/stripe'

interface DashboardProps {
  subscriptionPlan: Awaited<ReturnType<typeof getUserSubscriptionPlan>>
}

const Dashboard = ({ subscriptionPlan }: DashboardProps) => {
    const utils = trpc.useUtils()

    const { data: files, isLoading: filesLoading } = trpc.getUserFiles.useQuery()

    const [currentlyDeletingFile, setCurrentlyDeletingFile] = useState<string | null>(null)

    const { mutate: deleteFile } = trpc.deleteFile.useMutation({
      onSuccess: () => {
        utils.getUserFiles.invalidate()
      },
      onMutate({ id }) {
        setCurrentlyDeletingFile(id)
      },
      onSettled() {
        setCurrentlyDeletingFile(null)
      },
    })
    return (
        <main className='mx-auto max-w-7xl md:p-10'>
            {/* <div className='mt-8 flex flex-col items-start justify-between gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-center sm:gap-0'>
                <h1 className='mb-3 font-bold text-5xl text-gray-900'>
                My Notebooks
                </h1>

                <CreateNotebookButton/>
            </div>
            display all notebook files */}
            <div className='mt-8 flex flex-col items-start justify-between gap-4 border-b border-foreground/10 pb-5 sm:flex-row sm:items-center sm:gap-0'>
                <h1 className='mb-3 font-bold text-5xl text-foreground'>
                My Files
                </h1>

                <UploadButton isSubscribed={subscriptionPlan?.isSubscribed ?? false} />
            </div>
            {/* display all user files */}
            {files && files?.length !== 0 ? (
                <ul className='mt-8 grid grid-cols-1 gap-6 divide-y divide-foreground/10 md:grid-cols-2 lg:grid-cols-3'>
                {files
                    .sort(
                    (a, b) =>
                        new Date(b.createdAt).getTime() -
                        new Date(a.createdAt).getTime()
                    )
                    .map((file) => (
                    <li
                        key={file.id}
                        className='col-span-1 divide-y divide-foreground/10 rounded-lg dark:bg-gray-800 bg-card shadow transition hover:shadow-lg'>
                        <Link
                        href={`/dashboard/${file.id}`}
                        className='flex flex-col gap-2'>
                        <div className='pt-6 px-6 flex w-full items-center justify-between space-x-6'>
                        <Image
                          src={`/images/shape/shape-${String((files.indexOf(file) % 11) + 1).padStart(2, '0')}.svg`}
                          alt="File icon"
                          width={40}
                          height={40}
                          className="flex-shrink-0"
                        />
                            <div className='flex-1 truncate'>
                            <div className='flex items-center space-x-3'>
                                <h3 className='truncate text-lg font-medium text-foreground'>
                                {file.name}
                                </h3>
                            </div>
                            </div>
                        </div>
                        </Link>
                        <div className='px-2 mt-4 flex justify-between items-center py-2 gap-6 text-xs text-muted-foreground'>
                            <div className='flex items-center gap-2'>
                                <Plus className='h-4 w-4 text-foreground' />
                                <span className='text-foreground'>
                                {format(
                                new Date(file.createdAt),
                                'MMM dd, yyyy hh:mm a'
                                )}
                                </span>
                            </div>

                            <Button
                                onClick={() =>
                                    deleteFile({ id: file.id })
                                }
                                size='sm'
                                className='w-auto'
                                variant='destructive'>
                                {currentlyDeletingFile === file.id ? (
                                    <Loader2 className='h-4 w-8 animate-spin' />
                                ) : (
                                    <Trash className='h-4 w-6' />
                                )}
                            </Button>
                        </div>
                    </li>
                    ))}
                </ul>
            ) : filesLoading ? (
                <Skeleton height={100} className='my-2' count={3} />
            ) : (
                <div className='mt-16 flex flex-col items-center gap-2'>
                <Ghost className='h-8 w-8 text-foreground' />
                <h3 className='font-semibold text-xl text-foreground'>
                    Pretty empty around here
                </h3>
                <p className='text-muted-foreground'>Let&apos;s upload your first File.</p>
                </div>
            )}
    </main>
    )
}

export default Dashboard
