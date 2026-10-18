import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

type SiteImageProps = {
  src: string
  alt: string
  width?: number | string
  height?: number | string
  aspectRatio?: string
  objectFit?: 'cover' | 'contain'
  maxHeight?: number | string
}

export function SiteImage({
  src,
  alt,
  width = '100%',
  height = 'auto',
  aspectRatio = '16 / 9',
  objectFit = 'cover',
  maxHeight,
}: SiteImageProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <Box
        role="img"
        aria-label={alt}
        sx={{
          width,
          height: height === 'auto' ? undefined : height,
          aspectRatio,
          maxHeight,
          bgcolor: '#FFF4E7',
          border: '2px dashed',
          borderColor: 'primary.light',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: 2,
          textAlign: 'center',
        }}
      >
        <Typography variant="body2" color="text.secondary">
          {alt}
        </Typography>
      </Box>
    )
  }

  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      sx={{
        width,
        height,
        aspectRatio: height === 'auto' ? aspectRatio : undefined,
        objectFit,
        maxHeight,
        display: 'block',
      }}
    />
  )
}
