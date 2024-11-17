import { clsx, type ClassValue } from "clsx"
import { Metadata } from "next"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function absoluteUrl(path: string) {
  if(typeof window !== 'undefined') return path
  if(process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}${path}`
  return `http://localhost:${process.env.PORT ?? 3000}${path}`
}

export function constructMetadata({
  title = 'soliscribe',
  description = 'soliscribe is an interface powered by AI. Upload files and empower your notes with your personal AI agent and inline AI.',
  icons = [
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
  noIndex = false,
}: {
  title?: string,
  description?: string,
  icons?: Array<{ rel: string, url: string }>,
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
    icons,
    metadataBase: new URL('https://soliscribe.vercel.app'),
    themeColor: '#fff',
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}