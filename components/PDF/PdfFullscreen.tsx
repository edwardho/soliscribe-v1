import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Expand, Loader2 } from 'lucide-react'
import SimpleBar from 'simplebar-react'
import { Document, Page } from 'react-pdf'
import { useToast } from '@/hooks/use-toast'
import { useResizeDetector } from 'react-resize-detector'
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

interface PdfFullscreenProps {
  fileUrl: string
}

const PdfFullscreen = ({ fileUrl }: PdfFullscreenProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [numPages, setNumPages] = useState<number>()

  const { toast } = useToast()

  const { width, ref } = useResizeDetector()

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(v) => {
        if (!v) {
          setIsOpen(v)
        }
      }}>
      <DialogTrigger
        onClick={() => setIsOpen(true)}
        asChild>
        <Button
          variant='ghost'
          className='gap-1.5'
          aria-label='fullscreen'>
          <Expand className='h-3 w-3' />
        </Button>
      </DialogTrigger>
      <DialogContent className='max-w-7xl w-full'>
        <DialogTitle>PDF Viewer</DialogTitle>
        <DialogDescription></DialogDescription>
        <div className='mt-6'>
          <SimpleBar
            autoHide={false}
            className='max-h-[calc(100vh-10rem)] bg-white'>
            <div ref={ref}>
              <Document
                loading={
                  <div className='flex justify-center'>
                    <Loader2 className='my-24 h-6 w-6 animate-spin' />
                  </div>
                }
                onLoadError={() => {
                  toast({
                    title: 'Error loading PDF',
                    description: 'Please try again later',
                    variant: 'destructive',
                  })
                }}
                onLoadSuccess={({ numPages }) =>
                  setNumPages(numPages)
                }
                file={fileUrl}
                className='max-h-full'>
                <SimpleBar className='max-h-[calc(100vh-14rem)]'>
                  {new Array(numPages).fill(0).map((_, i) => (
                    <Page
                      key={i}
                      width={width ? width : 1}
                      pageNumber={i + 1}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                    />
                  ))}
                </SimpleBar>
              </Document>
            </div>
          </SimpleBar>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default PdfFullscreen