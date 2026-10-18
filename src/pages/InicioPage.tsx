import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { ImageCarousel } from '../components/ImageCarousel'
import { SiteImage } from '../components/SiteImage'
import { INICIO_PERFIL } from '../content/inicio'
import { CAROUSEL_SLIDES, IMAGE_PATHS, SITE } from '../content/site'

export default function InicioPage() {
  return (
    <Container maxWidth="lg">
      <ImageCarousel slides={CAROUSEL_SLIDES} />

      <Paper sx={{ mt: 3, p: { xs: 2, md: 4 }, bgcolor: '#F9F9F9' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: 2,
            '& img': {
              width: 96,
              height: 96,
              objectFit: 'contain',
              transform: 'scale(1)',
              transition: 'transform 0.35s ease',
              '&:hover': {
                transform: 'scale(1.12)',
              },
            },
          }}
        >
          <SiteImage
            src={IMAGE_PATHS.perfilConservador}
            alt="Ícono de perfil del conservador"
            width={96}
            height={96}
            aspectRatio="1 / 1"
            objectFit="contain"
          />
        </Box>
        <Typography variant="h2" gutterBottom>
          Perfil del conservador
        </Typography>
        <List>
          {INICIO_PERFIL.map((item) => (
            <ListItem key={item} sx={{ py: 0.5 }} disableGutters>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Paper>

      <Paper sx={{ mt: 3, p: { xs: 2, md: 4 }, textAlign: 'center' }}>
        <Typography variant="h3" color="text.secondary" gutterBottom>
          Últimas publicaciones en Facebook
        </Typography>
        <Stack spacing={2} sx={{ alignItems: 'center' }}>
          <Typography>
            Seguí las novedades de ASACOR en las redes oficiales.
          </Typography>
          <Button
            variant="contained"
            href={SITE.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook ASACOR
          </Button>
        </Stack>
      </Paper>
    </Container>
  )
}
