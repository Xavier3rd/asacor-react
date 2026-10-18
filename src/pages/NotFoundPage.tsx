import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Link as RouterLink } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', py: 8 }}>
      <Typography variant="h1" gutterBottom>
        Página no encontrada
      </Typography>
      <Typography component="p" sx={{ mb: 2 }} color="text.secondary">
        La dirección no existe o fue movida.
      </Typography>
      <Button component={RouterLink} to="/" variant="contained">
        Volver al inicio
      </Button>
    </Container>
  )
}
