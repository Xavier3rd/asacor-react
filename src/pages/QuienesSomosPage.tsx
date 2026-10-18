import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Paper from '@mui/material/Paper'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import { PageHeader } from '../components/PageHeader'
import { SITE } from '../content/site'
import {
  ASOCIADOS_TIPOS,
  CATEGORIAS_SOCIOS,
  COMISION_ACTUAL,
  COMISIONES_ANTERIORES,
  COMISIONES_TRABAJO,
  CUENTA_BANCARIA,
  CUOTAS_2025,
  HISTORIA,
  METAS,
  OBJETIVOS,
} from '../content/quienesSomos'

const TABS = [
  'Historia',
  'Nuestra propuesta',
  'Estatuto',
  'Comisión Directiva',
  'Comisiones de trabajo',
  'Cómo asociarse',
] as const

export default function QuienesSomosPage() {
  const [tab, setTab] = useState(0)

  return (
    <Container maxWidth="lg">
      <PageHeader title="Quiénes somos" />
      <Tabs
        value={tab}
        onChange={(_event, value: number) => setTab(value)}
        variant="scrollable"
        scrollButtons="auto"
        sx={{ mb: 3, borderBottom: 1, borderColor: 'divider' }}
      >
        {TABS.map((label) => (
          <Tab key={label} label={label} />
        ))}
      </Tabs>

      {tab === 0 ? <HistoriaPanel /> : null}
      {tab === 1 ? <PropuestaPanel /> : null}
      {tab === 2 ? <EstatutoPanel /> : null}
      {tab === 3 ? <ComisionPanel /> : null}
      {tab === 4 ? <ComisionesTrabajoPanel /> : null}
      {tab === 5 ? <AsociarsePanel /> : null}
    </Container>
  )
}

function HistoriaPanel() {
  return (
    <Paper sx={{ p: { xs: 2, md: 3 } }}>
      {HISTORIA.map((paragraph) => (
        <Typography key={paragraph} component="p" sx={{ mb: 2 }}>
          {paragraph}
        </Typography>
      ))}
    </Paper>
  )
}

function PropuestaPanel() {
  return (
    <Paper sx={{ p: { xs: 2, md: 3 } }}>
      <Typography variant="h3" gutterBottom>
        Metas
      </Typography>
      <List>
        {METAS.map((item) => (
          <ListItem key={item} disableGutters>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
      <Typography variant="h3" gutterBottom sx={{ mt: 2 }}>
        Objetivos
      </Typography>
      <List>
        {OBJETIVOS.map((item) => (
          <ListItem key={item} disableGutters>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
      <Typography variant="h3" gutterBottom sx={{ mt: 2 }}>
        Asociados
      </Typography>
      <List>
        {ASOCIADOS_TIPOS.map((item) => (
          <ListItem key={item} disableGutters>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Paper>
  )
}

function EstatutoPanel() {
  return (
    <Paper sx={{ p: { xs: 2, md: 3 } }}>
      <Typography component="p" sx={{ mb: 2 }}>
        A raíz de la emergencia por el COVID-19, durante los años 2020 y 2021 se trabajó
        en la modificación del estatuto para permitir reuniones a distancia. A
        continuación se puede descargar el estatuto modificado aprobado por la IGJ.
      </Typography>
      <Button variant="contained" href={SITE.estatutoPdf} target="_blank" rel="noopener noreferrer">
        Estatuto ASACOR 2021 (PDF)
      </Button>
      <Typography variant="caption" component="p" sx={{ mt: 2 }} color="text.secondary">
        Si el PDF no aparece, copiá el archivo a public/docs/estatuto-asacor-2021.pdf
      </Typography>
    </Paper>
  )
}

function ComisionPanel() {
  return (
    <Paper sx={{ p: { xs: 2, md: 3 } }}>
      <Typography variant="h3" color="primary" gutterBottom>
        Comisión Directiva {COMISION_ACTUAL.periodo}
      </Typography>
      <Typography>
        <strong>Presidenta:</strong> {COMISION_ACTUAL.presidenta}
      </Typography>
      <Typography>
        <strong>Secretaria:</strong> {COMISION_ACTUAL.secretaria}
      </Typography>
      <Typography>
        <strong>Tesorera:</strong> {COMISION_ACTUAL.tesorera}
      </Typography>
      <Typography>
        <strong>Vocales:</strong> {COMISION_ACTUAL.vocales}
      </Typography>
      <Typography component="p" sx={{ mb: 2 }}>
        <strong>Revisores de cuentas:</strong> {COMISION_ACTUAL.revisores}
      </Typography>
      <Typography variant="h3" gutterBottom>
        Comisiones anteriores
      </Typography>
      {COMISIONES_ANTERIORES.map((item) => (
        <Box key={item.periodo} sx={{ mb: 2 }}>
          <Typography sx={{ fontWeight: 700 }}>Comisión Directiva {item.periodo}</Typography>
          <Typography>{item.miembros}</Typography>
        </Box>
      ))}
    </Paper>
  )
}

function ComisionesTrabajoPanel() {
  return (
    <Paper sx={{ p: { xs: 2, md: 3 } }}>
      {COMISIONES_TRABAJO.map((item) => (
        <Box key={item.titulo} sx={{ mb: 3 }}>
          <Typography variant="h3" gutterBottom>
            {item.titulo}
          </Typography>
          <Typography>{item.descripcion}</Typography>
        </Box>
      ))}
    </Paper>
  )
}

function AsociarsePanel() {
  return (
    <Paper sx={{ p: { xs: 2, md: 3 } }}>
      <Typography variant="h3" gutterBottom>
        Categorías de socios
      </Typography>
      {CATEGORIAS_SOCIOS.map((item) => (
        <Box key={item.titulo} sx={{ mb: 2 }}>
          <Typography sx={{ fontWeight: 700 }}>{item.titulo}</Typography>
          <Typography>{item.texto}</Typography>
        </Box>
      ))}

      <Typography variant="h3" gutterBottom sx={{ mt: 3 }}>
        Procedimiento de admisión
      </Typography>
      <Typography component="p" sx={{ mb: 2 }}>
        La persona interesada en ser admitida en alguna de las categorías establecidas
        por ASACOR debe completar y enviar el Formulario de Solicitud de Admisión, la
        cual será evaluada por la Comisión Directiva. Una vez aceptada la solicitud y
        establecida la categoría de admisión, se deberá formalizar la membresía con el
        pago de la cuota semestral vigente.
      </Typography>

      <Typography variant="h3" gutterBottom>
        Cuota societaria vigente
      </Typography>
      <Typography component="p" sx={{ mb: 2 }}>
        La cuota societaria se establece cada seis meses (2 cuotas al año), con
        posibilidad de realizar por adelantado una sola cuota de carácter anual con un
        descuento como beneficio. Cuadro aprobado por Asamblea Extraordinaria 2025:
      </Typography>

      <Table size="small" sx={{ mb: 3 }}>
        <TableHead>
          <TableRow>
            <TableCell>Socio</TableCell>
            <TableCell>Semestre 1-2025</TableCell>
            <TableCell>Semestre 2-2025</TableCell>
            <TableCell>Anual 2025 — adelanto</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {CUOTAS_2025.map((row) => (
            <TableRow key={row.socio}>
              <TableCell>{row.socio}</TableCell>
              <TableCell>{row.s1}</TableCell>
              <TableCell>{row.s2}</TableCell>
              <TableCell>{row.anual}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Typography variant="h3" gutterBottom>
        Datos de la cuenta ASACOR. {CUENTA_BANCARIA.banco}
      </Typography>
      <Typography>
        <strong>Razón social:</strong> {CUENTA_BANCARIA.razonSocial}
      </Typography>
      <Typography>
        <strong>CUIT:</strong> {CUENTA_BANCARIA.cuit}
      </Typography>
      <Typography>
        <strong>Tipo y número de cuenta:</strong> {CUENTA_BANCARIA.tipoCuenta}
      </Typography>
      <Typography>
        <strong>CBU/CVU:</strong> {CUENTA_BANCARIA.cbu}. <strong>Alias:</strong>{' '}
        {CUENTA_BANCARIA.alias}
      </Typography>
      <Typography component="p" sx={{ mt: 2, mb: 2 }}>
        El comprobante debe enviarse a{' '}
        <Link href={`mailto:${SITE.treasuryEmail}`}>{SITE.treasuryEmail}</Link> con
        copia a <Link href={`mailto:${SITE.email}`}>{SITE.email}</Link>.
      </Typography>
      <Button
        variant="contained"
        href={SITE.admissionForm}
        target="_blank"
        rel="noopener noreferrer"
      >
        Formulario de solicitud de admisión
      </Button>
    </Paper>
  )
}
