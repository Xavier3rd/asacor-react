import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { EmptyState } from '../components/EmptyState'
import { PageHeader } from '../components/PageHeader'
import { SITE } from '../content/site'
import { SocioCounter, SocioTable } from '../features/socios'

export default function DirectorioPage() {
  return (
    <Container maxWidth="lg">
      <PageHeader title="Directorio de socios" />
      <Paper sx={{ p: { xs: 2, md: 3 }, mb: 3 }}>
        <Typography component="p" sx={{ mb: 2 }}>
          Con el fin de realizar el Directorio actualizado de Socios solicitamos a
          todos los miembros de ASACOR con fecha de admisión anterior a 2024,
          completar el formulario de actualización de datos.
        </Typography>
        <Button
          variant="contained"
          href={SITE.sociosUpdateForm}
          target="_blank"
          rel="noopener noreferrer"
        >
          Formulario de actualización de datos
        </Button>
      </Paper>
      <SocioCounter />
      <SocioTable />

      <Typography variant="h2" color="text.secondary" sx={{ mt: 5 }} gutterBottom>
        Entidades relacionadas
      </Typography>
      <EmptyState />
    </Container>
  )
}
