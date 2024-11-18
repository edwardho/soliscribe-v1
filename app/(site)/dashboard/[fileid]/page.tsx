import FilePageClient from './FilePageClient'
import { db } from '@/db'
import { auth } from '@/lib/auth'
import { notFound, redirect } from 'next/navigation'

// Import the correct types from Next.js
import { Metadata } from 'next'

interface PageProps {
  params: {
    fileid: string
  }
}

// Mark the component as a Page component
export default async function Page({ params }: PageProps) {
  const { fileid } = params

  const user = await auth()

  if (!user || !user.id) {
    redirect(`/auth-callback?origin=dashboard/${fileid}`)
  }

  const file = await db.file.findUnique({
    where: {
      id: fileid,
      userId: user.id,
    },
  })

  if (!file) {
    notFound()
  }

  return <FilePageClient file={file} />
}

// Optionally, add metadata
export const metadata: Metadata = {
  title: 'File View',
  description: 'View and edit your file',
}
