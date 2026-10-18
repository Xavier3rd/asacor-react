import { useEffect, useMemo, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { createSocioRepository } from './createSocioRepository'

function easeOutCubic(t: number): number {
  return 1 - (1 - t) ** 3
}

export function SocioCounter() {
  const repository = useMemo(() => createSocioRepository(), [])
  const [total, setTotal] = useState(0)
  const [value, setValue] = useState(0)

  useEffect(() => {
    let cancelled = false
    void repository.list({ page: 0, pageSize: 1 }).then((result) => {
      if (!cancelled) {
        setTotal(result.total)
      }
    })
    return () => {
      cancelled = true
    }
  }, [repository])

  useEffect(() => {
    if (total <= 0) {
      setValue(0)
      return
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) {
      setValue(total)
      return
    }

    const durationMs = 1800
    const startedAt = performance.now()
    let frame = 0

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / durationMs, 1)
      setValue(Math.round(easeOutCubic(progress) * total))
      if (progress < 1) {
        frame = window.requestAnimationFrame(tick)
      }
    }

    frame = window.requestAnimationFrame(tick)
    return () => window.cancelAnimationFrame(frame)
  }, [total])

  return (
    <Box
      sx={{
        textAlign: 'center',
        py: { xs: 2, md: 3 },
        mb: 3,
      }}
    >
      <Typography
        component="p"
        aria-live="polite"
        sx={{
          fontSize: { xs: '3.25rem', md: '4.75rem' },
          fontWeight: 700,
          lineHeight: 1,
          color: 'primary.main',
          letterSpacing: '-0.04em',
        }}
      >
        {value}
      </Typography>
      <Box
        sx={{
          width: 48,
          height: 4,
          mx: 'auto',
          mt: 1.25,
          bgcolor: 'secondary.main',
          borderRadius: 1,
        }}
      />
      <Typography
        component="p"
        sx={{
          mt: 1.5,
          fontSize: { xs: '0.85rem', md: '0.95rem' },
          fontWeight: 700,
          letterSpacing: '0.42em',
          color: 'primary.main',
        }}
      >
        SOCIOS
      </Typography>
    </Box>
  )
}
