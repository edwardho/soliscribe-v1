'use client'

import {
  ChevronDown,
  ChevronUp,
  Loader2,
  RotateCw,
  Search,
} from 'lucide-react'
import { Document, Page, pdfjs } from 'react-pdf'

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { useToast } from '@/hooks/use-toast'

import { useResizeDetector } from 'react-resize-detector'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { useState, useEffect } from 'react'

import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'
import { cn } from '@/lib/utils'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'

import SimpleBar from 'simplebar-react'
import PdfFullscreen from './PdfFullscreen'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

interface PdfRendererProps {
  url: string
  currentPage?: number
  onPageChange?: (page: number) => void
}

const PdfRenderer = ({ url, currentPage = 1, onPageChange }: PdfRendererProps) => {
  const { toast } = useToast()

  const [numPages, setNumPages] = useState<number>()
  const [currPage, setCurrPage] = useState<number>(currentPage)
  const [scale, setScale] = useState<number>(1)
  const [rotation, setRotation] = useState<number>(0)
  const [renderedScale, setRenderedScale] = useState<number | null>(null)

  const CustomPageValidator = z.object({
    page: z.string().refine((num) => Number(num) > 0 && Number(num) <= numPages!)
  })

  type TCustomPageValidator = z.infer<typeof CustomPageValidator>

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<TCustomPageValidator>({
    defaultValues: {
      page: String(currentPage),
    },
    resolver: zodResolver(CustomPageValidator),
  })

  useEffect(() => {
    setCurrPage(currentPage)
    setValue('page', String(currentPage))
  }, [currentPage, setValue])

  const isLoading = renderedScale !== scale

  const { width, ref } = useResizeDetector()

  const handlePageSubmit = ({
    page,
  }: TCustomPageValidator) => {
    const pageNumber = Number(page)
    setCurrPage(pageNumber)
    setValue('page', String(pageNumber))
    onPageChange?.(pageNumber)
  }

  const handlePageChange = (newPage: number) => {
    setCurrPage(newPage)
    setValue('page', String(newPage))
    onPageChange?.(newPage)
  }

  return (
    <div className='w-full bg-background rounded-md shadow flex flex-col items-center'>
      <div className='h-14 w-full border-b border-border flex items-center justify-between px-2'>
        <div className='flex items-center gap-1.5'>
          <Button
            disabled={currPage <= 1}
            onClick={() => {
              const newPage = currPage - 1 > 1 ? currPage - 1 : 1
              handlePageChange(newPage)
            }}
            variant='ghost'
            size='sm'
            aria-label='previous page'>
            <ChevronUp className='h-3 w-3' />
          </Button>

          <div className='flex items-center gap-1'>
            <Input
              {...register('page')}
              className={cn(
                'w-10 h-7 px-1',
                errors.page && 'focus-visible:ring-destructive'
              )}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSubmit(handlePageSubmit)()
              }}
            />
            <span className='text-muted-foreground text-xs'>/</span>
            <span className='text-muted-foreground text-xs'>{numPages ?? 'x'}</span>
          </div>

          <Button
            disabled={numPages === undefined || currPage === numPages}
            onClick={() => {
              const newPage = currPage + 1 > numPages! ? numPages! : currPage + 1
              handlePageChange(newPage)
            }}
            variant='ghost'
            size='sm'
            aria-label='next page'>
            <ChevronDown className='h-3 w-3' />
          </Button>
        </div>

        <div className='space-x-2'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className='gap-1.5'
                aria-label='zoom'
                variant='ghost'>
                <Search className='h-3 w-3' />
                {scale * 100}%
                <ChevronUp className='h-3 w-3 opacity-50' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                onSelect={() => setScale(0.5)}>
                50%
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => setScale(0.6)}>
                60%
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => setScale(0.7)}>
                70%
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => setScale(0.8)}>
                80%
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => setScale(0.9)}>
                90%
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => setScale(1)}>
                100%
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => setScale(1.5)}>
                150%
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => setScale(2)}>
                200%
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => setScale(2.5)}>
                250%
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            onClick={() => setRotation((prev) => (prev + 90) % 360)}
            variant='ghost'
            aria-label='rotate 90 degrees'>
            <RotateCw className='h-3 w-3' />
          </Button>

          <PdfFullscreen fileUrl={url} />
        </div>
      </div>

      <div className='flex-1 w-full max-h-screen bg-white'>
        <SimpleBar
          autoHide={false}
          className='max-h-[calc(100vh)]'>
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
              file={url}
              className='max-h-full'>
              {isLoading && renderedScale ? (
                <Page
                  width={width ? width : 1}
                  pageNumber={currPage}
                  scale={scale}
                  rotate={rotation}
                  key={'@' + renderedScale}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                />
              ) : null}

              <Page
                className={cn(isLoading ? 'hidden' : '')}
                width={width ? width : 1}
                pageNumber={currPage}
                scale={scale}
                rotate={rotation}
                key={'@' + scale}
                renderAnnotationLayer={false}
                renderTextLayer={false}
                loading={
                  <div className='flex justify-center'>
                    <Loader2 className='my-24 h-6 w-6 animate-spin' />
                  </div>
                }
                onRenderSuccess={() =>
                  setRenderedScale(scale)
                }
              />
            </Document>
          </div>
        </SimpleBar>
      </div>
    </div>
  )
}

export default PdfRenderer