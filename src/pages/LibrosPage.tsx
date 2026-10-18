import Container from '@mui/material/Container'
import { EmptyState } from '../components/EmptyState'
import { PageHeader } from '../components/PageHeader'

export default function LibrosPage() {
  return (
    <Container maxWidth="lg">
      <PageHeader title="Libros" />
      <EmptyState />
    </Container>
  )
}
