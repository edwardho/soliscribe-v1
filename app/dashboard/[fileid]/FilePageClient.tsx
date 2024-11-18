'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import ChatWrapper from '@/components/Chat/ChatWrapper'
import { FileText, Pencil, FileQuestion, MessageSquare } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const PdfRenderer = dynamic(() => import('@/components/PDF/PdfRenderer'), {
  ssr: false,
})
const Notes = dynamic(() => import('@/components/Notes'), {
  ssr: false,
}) as React.ComponentType<{ fileId: string }>

const Summary = dynamic(() => import('@/components/Summary'), {
  ssr: false,
}) as React.ComponentType<{ fileId: string }>

interface FilePageClientProps {
  file: {
    id: string
    url: string
  }
}

const FilePageClient = ({ file }: FilePageClientProps) => {
  const [activeTab, setActiveTab] = useState<string>(() => {
    // Try to get saved tab from localStorage on initial render
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(`pdf-tab-${file.id}`)
      return saved || 'file'
    }
    return 'file'
  })

  const [currentPage, setCurrentPage] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const savedPage = localStorage.getItem(`pdf-page-${file.id}`)
      return savedPage ? parseInt(savedPage) : 1
    }
    return 1
  })

  // Save active tab to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(`pdf-tab-${file.id}`, activeTab)
  }, [activeTab, file.id])

  // Save current page to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(`pdf-page-${file.id}`, currentPage.toString())
  }, [currentPage, file.id])

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText':
        return <FileText className='h-5 w-5' />
      case 'Pencil':
        return <Pencil className='h-5 w-5' />
      case 'FileQuestion':
        return <FileQuestion className='h-5 w-5' />
      default:
        return null
    }
  }

  const tabs = [
    { id: 'file', label: 'File', icon: 'FileText' },
    { id: 'notes', label: 'Notes', icon: 'Pencil' },
    { id: 'summary', label: 'Summary', icon: 'FileQuestion' },
  ]

  return (
    <div className='flex-1 justify-between flex flex-col h-[calc(100vh-3.5rem)]'>
      <div className='mx-auto w-full max-w-8xl grow lg:flex xl:px-2'>
        {/* Left side - PDF Viewer / Notes / Summary */}
        <div className='flex-1 xl:flex'>
          <div className='px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6'>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList>
                {tabs.map((tab) => (
                  <TabsTrigger key={tab.id} value={tab.id} className="flex items-center space-x-2">
                    {renderIcon(tab.icon)}
                    <span>{tab.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
              <div className="mt-4 h-full overflow-hidden">
                <div style={{ display: activeTab === 'file' ? 'block' : 'none' }}>
                  <div className="border border-gray-200 rounded-lg">
                    <PdfRenderer 
                      url={file.url} 
                      currentPage={currentPage}
                      onPageChange={setCurrentPage}
                    />
                  </div>
                </div>
                <div style={{ display: activeTab === 'notes' ? 'block' : 'none' }}>
                  <Notes fileId={file.id} />
                </div>
                <div style={{ display: activeTab === 'summary' ? 'block' : 'none' }}>
                  <Summary fileId={file.id} />
                </div>
              </div>
            </Tabs>
          </div>
        </div>

        {/* Right side - Chat */}
        <div className='shrink-0 flex-[0.75] lg:w-96 border-l border-input bg-background/80 backdrop-blur-sm rounded-lg'>
          <div className='h-full flex flex-col'>
            <div className='p-4 border-b border-input bg-muted/50 rounded-t-lg'>
              <h2 className='text-sm font-semibold text-foreground flex items-center gap-2'>
                <MessageSquare className='h-5 w-5 text-primary/80' />
                AI Assistant
              </h2>
            </div>
            <div className='flex-1'>
              <ChatWrapper fileId={file.id} isSubscribed={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FilePageClient

