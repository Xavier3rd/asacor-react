import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { EmptyState } from '../components/EmptyState'
import { PageHeader } from '../components/PageHeader'
import { SiteImage } from '../components/SiteImage'
import { ACTIVIDADES_INTRO, ACTIVIDADES_REDES } from '../content/actividades'
import { IMAGE_PATHS, SITE } from '../content/site'

const gallery = [
  { src: IMAGE_PATHS.actividad1, alt: 'Actividad ASACOR 1' },
  { src: IMAGE_PATHS.actividad2, alt: 'Actividad ASACOR 2' },
  { src: IMAGE_PATHS.actividad3, alt: 'Actividad ASACOR 3' },
] as const

export default function ActividadesPage() {
  return (
    <Container maxWidth="lg">
      <PageHeader title="Actividades" />
      <Paper sx={{ p: { xs: 2, md: 3 }, mb: 3, textAlign: 'center' }}>
        <Typography variant="h3" color="primary" gutterBottom>
          Agenda 2024
        </Typography>
        <Typography>{ACTIVIDADES_INTRO}</Typography>
      </Paper>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        {gallery.map((item) => (
          <Grid key={item.src} size={{ xs: 12, sm: 4 }}>
            <SiteImage src={item.src} alt={item.alt} aspectRatio="1 / 1" />
          </Grid>
        ))}
      </Grid>

      <Paper sx={{ p: { xs: 2, md: 3 }, mb: 3, textAlign: 'center' }}>
        <Typography component="p" sx={{ mb: 2 }}>
          {ACTIVIDADES_REDES}
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: 'center' }}>
          <Button
            variant="contained"
            href={SITE.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook: asacor
          </Button>
          <Button
            variant="outlined"
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram: @asacorargentina
          </Button>
        </Stack>
      </Paper>

      <Typography variant="h2" color="text.secondary" gutterBottom>
        Galería de imágenes
      </Typography>
      <EmptyState />
    </Container>
  )
}
