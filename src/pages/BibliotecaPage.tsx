import Container from '@mui/material/Container'
import { EmptyState } from '../components/EmptyState'
import { PageHeader } from '../components/PageHeader'

export default function BibliotecaPage() {
  return (
    <Container maxWidth="lg">
      <PageHeader title="Biblioteca virtual" />
      <EmptyState />
    </Container>
  )
}
