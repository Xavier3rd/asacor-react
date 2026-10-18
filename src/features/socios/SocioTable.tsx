import { useCallback, useEffect, useMemo, useState } from 'react'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import { DataGrid, type GridColDef, type GridPaginationModel } from '@mui/x-data-grid'
import { createSocioRepository } from './createSocioRepository'
import type { Socio } from './domain'

function mailAddresses(value: string): string[] {
  return value
    .split(/[/,;]+/)
    .map((part) => part.trim())
    .filter((part) => part.includes('@'))
}

function redesItems(value: string): string[] {
  return value
    .split(';')
    .map((part) => part.trim())
    .filter(Boolean)
}

function instagramUrl(token: string): string | null {
  const handle = token
    .replace(/^ig\s*:\s*/i, '')
    .replace(/^@/, '')
    .trim()
  if (!handle || handle.includes(' ')) {
    return null
  }
  return `https://www.instagram.com/${handle.replace(/\/$/, '')}`
}

function hrefFromRedes(token: string): string | null {
  const trimmed = token.trim()
  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed
  }
  if (/^www\./i.test(trimmed) || trimmed.includes('linkedin.com') || trimmed.includes('wixsite.com')) {
    return `https://${trimmed.replace(/^https?:\/\//i, '')}`
  }
  if (/^ig\s*:/i.test(trimmed) || trimmed.startsWith('@')) {
    return instagramUrl(trimmed)
  }
  return null
}

function redesLabel(token: string): string {
  const trimmed = token.trim()
  if (/^ig\s*:/i.test(trimmed) || trimmed.startsWith('@')) {
    return trimmed.replace(/^ig\s*:\s*/i, '').trim()
  }
  if (trimmed.includes('linkedin.com')) {
    return 'LinkedIn'
  }
  if (/^https?:\/\//i.test(trimmed) || /^www\./i.test(trimmed)) {
    try {
      return new URL(trimmed.startsWith('http') ? trimmed : `https://${trimmed}`).hostname.replace(
        /^www\./,
        '',
      )
    } catch {
      return 'Sitio'
    }
  }
  return trimmed
}

const columns: GridColDef<Socio>[] = [
  { field: 'apellidoNombre', headerName: 'Apellido y nombre', flex: 1.2, minWidth: 200 },
  {
    field: 'categoria',
    headerName: 'Categoría',
    flex: 0.6,
    minWidth: 110,
    renderCell: (params) => {
      const isActivo = String(params.value).toLowerCase().includes('activo')
      return params.value ? (
        <Chip
          size="small"
          label={params.value}
          variant={isActivo ? 'filled' : 'outlined'}
          sx={isActivo ? { bgcolor: 'secondary.main', color: 'primary.main' } : undefined}
        />
      ) : (
        '—'
      )
    },
  },
  {
    field: 'correo',
    headerName: 'Mail de contacto',
    flex: 1.1,
    minWidth: 200,
    sortable: false,
    renderCell: (params) => {
      const emails = mailAddresses(String(params.value ?? ''))
      if (emails.length === 0) {
        return '—'
      }
      return (
        <Stack spacing={0.25}>
          {emails.map((email) => (
            <Link key={email} href={`mailto:${email}`} underline="hover" color="primary">
              {email}
            </Link>
          ))}
        </Stack>
      )
    },
  },
  { field: 'localidad', headerName: 'Localidad', flex: 0.9, minWidth: 150 },
  {
    field: 'especialidad',
    headerName: 'Especialidad y/o interés',
    flex: 1.4,
    minWidth: 220,
  },
  {
    field: 'redes',
    headerName: 'Redes / URL profesional',
    flex: 1.2,
    minWidth: 200,
    sortable: false,
    renderCell: (params) => {
      const items = redesItems(String(params.value ?? ''))
      if (items.length === 0) {
        return '—'
      }
      return (
        <Stack spacing={0.25}>
          {items.map((item) => {
            const href = hrefFromRedes(item)
            if (!href) {
              return (
                <Box key={item} component="span">
                  {item}
                </Box>
              )
            }
            return (
              <Link
                key={item}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                underline="hover"
              >
                {redesLabel(item)}
              </Link>
            )
          })}
        </Stack>
      )
    },
  },
]

export function SocioTable() {
  const repository = useMemo(() => createSocioRepository(), [])
  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const [rows, setRows] = useState<Socio[]>([])
  const [rowCount, setRowCount] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 10,
  })

  useEffect(() => {
    const timer = window.setTimeout(() => setDebouncedQuery(query.trim()), 250)
    return () => window.clearTimeout(timer)
  }, [query])

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const result = await repository.list({
        q: debouncedQuery,
        page: paginationModel.page,
        pageSize: paginationModel.pageSize,
      })
      setRows(result.items)
      setRowCount(result.total)
    } catch (cause) {
      const message =
        cause instanceof Error ? cause.message : 'No se pudo cargar el directorio.'
      setError(message)
      setRows([])
      setRowCount(0)
    } finally {
      setLoading(false)
    }
  }, [repository, debouncedQuery, paginationModel.page, paginationModel.pageSize])

  useEffect(() => {
    void load()
  }, [load])

  return (
    <Box>
      <TextField
        fullWidth
        label="Buscar socios"
        value={query}
        onChange={(event) => {
          setQuery(event.target.value)
          setPaginationModel((current) => ({ ...current, page: 0 }))
        }}
        sx={{ mb: 2, maxWidth: 420 }}
      />
      {error ? (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      ) : null}
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.id}
        loading={loading}
        rowCount={rowCount}
        paginationMode="server"
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={[10, 25, 50]}
        disableRowSelectionOnClick
        getRowHeight={() => 'auto'}
        sx={{
          bgcolor: 'background.paper',
          '& .MuiDataGrid-columnHeaders': { bgcolor: 'secondary.main' },
          '& .MuiDataGrid-cell': { py: 1, alignItems: 'flex-start' },
        }}
      />
    </Box>
  )
}
