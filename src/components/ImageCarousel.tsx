import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { SiteImage } from './SiteImage'

type Slide = {
  src: string
  alt: string
}

type ImageCarouselProps = {
  slides: readonly Slide[]
}

export function ImageCarousel({ slides }: ImageCarouselProps) {
  const [index, setIndex] = useState(0)
  const total = slides.length

  useEffect(() => {
    if (total < 2) {
      return
    }
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % total)
    }, 6000)
    return () => window.clearInterval(timer)
  }, [total])

  const current = slides[index]
  if (!current) {
    return null
  }

  return (
    <Box sx={{ position: 'relative' }}>
      <SiteImage src={current.src} alt={current.alt} aspectRatio="3 / 1" maxHeight={280} />
      {total > 1 ? (
        <>
          <IconButton
            aria-label="Anterior"
            onClick={() => setIndex((currentIndex) => (currentIndex - 1 + total) % total)}
            sx={{
              position: 'absolute',
              top: '50%',
              left: 8,
              transform: 'translateY(-50%)',
              bgcolor: 'rgba(255,255,255,0.8)',
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            aria-label="Siguiente"
            onClick={() => setIndex((currentIndex) => (currentIndex + 1) % total)}
            sx={{
              position: 'absolute',
              top: '50%',
              right: 8,
              transform: 'translateY(-50%)',
              bgcolor: 'rgba(255,255,255,0.8)',
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        </>
      ) : null}
    </Box>
  )
}
