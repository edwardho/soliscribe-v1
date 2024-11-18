import FilePageClient from './FilePageClient'
import { db } from '@/db'
import { auth } from '@/lib/auth'
import { notFound, redirect } from 'next/navigation'

interface PageProps {
  params: Promise<{
    fileid: string
  }>
}

const FilePage = async ({ params }: PageProps) => {
  const resolvedParams = await params
  const { fileid } = resolvedParams

  const user = await auth()
  console.log('User auth:', user)

  if (!user || !user.id) {
    console.log('Redirecting to auth-callback - no user:', user)
    redirect(`/auth-callback?origin=dashboard/${fileid}`)
  }

  const file = await db.file.findUnique({
    where: {
      id: fileid,
      userId: user.id,
    },
  })

  if (!file) {
    console.log('Redirecting to not found - no file found for user:', user.id)
    notFound()
  }

  return <FilePageClient file={file} />
}

export default FilePage
