import Papa from 'papaparse'
import type { Socio, SocioListParams, SocioListResult, SocioRepository } from '../domain'

type CsvRow = Record<string, string | undefined>

const FIELD_ALIASES: Record<keyof Omit<Socio, 'id'>, string[]> = {
  apellidoNombre: [
    'apellido y nombre',
    'apellidoynombre',
    'nombreapellido',
    'nombre y apellido',
    'nombre',
  ],
  categoria: ['categoría', 'categoria'],
  correo: ['mail de contacto', 'correo', 'email', 'e-mail', 'mail'],
  localidad: ['localidad', 'lugarresidencia', 'lugar de residencia', 'residencia'],
  especialidad: ['especialidad y/o interés', 'especialidad y/o interes', 'especialidad'],
  redes: ['redes/ url profesional', 'redes', 'url profesional', 'cv'],
}

function normalizeKey(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()
}

function pick(row: CsvRow, aliases: string[]): string {
  const entries = Object.entries(row)
  for (const alias of aliases) {
    const match = entries.find(([key]) => normalizeKey(key) === alias)
    if (match?.[1]) {
      return match[1].trim()
    }
  }
  return ''
}

function mapRow(row: CsvRow, index: number): Socio {
  const apellidoNombre = pick(row, FIELD_ALIASES.apellidoNombre)
  const correo = pick(row, FIELD_ALIASES.correo)
  return {
    id: correo.split(/[/,;]+/)[0]?.trim() || `${apellidoNombre}-${index}`,
    apellidoNombre,
    categoria: pick(row, FIELD_ALIASES.categoria),
    correo,
    localidad: pick(row, FIELD_ALIASES.localidad),
    especialidad: pick(row, FIELD_ALIASES.especialidad),
    redes: pick(row, FIELD_ALIASES.redes),
  }
}

function matchesQuery(socio: Socio, query: string): boolean {
  if (!query) {
    return true
  }
  const haystack = [
    socio.apellidoNombre,
    socio.categoria,
    socio.correo,
    socio.localidad,
    socio.especialidad,
    socio.redes,
  ]
    .join(' ')
    .toLowerCase()
  return haystack.includes(query.toLowerCase())
}

export class CsvSocioRepository implements SocioRepository {
  private cache: Socio[] | null = null
  private readonly url: string

  constructor(url: string) {
    this.url = url
  }

  async list(params: SocioListParams = {}): Promise<SocioListResult> {
    const socios = await this.load()
    const query = params.q?.trim() ?? ''
    const filtered = socios.filter((socio) => matchesQuery(socio, query))
    const page = Math.max(params.page ?? 0, 0)
    const pageSize = Math.max(params.pageSize ?? 1, 1)
    const start = page * pageSize
    return {
      items: filtered.slice(start, start + pageSize),
      total: filtered.length,
    }
  }

  private async load(): Promise<Socio[]> {
    if (this.cache) {
      return this.cache
    }

    const response = await fetch(this.url)
    if (!response.ok) {
      throw new Error('No se pudo leer el directorio de socios.')
    }

    const csv = await response.text()
    const parsed = Papa.parse<CsvRow>(csv, {
      header: true,
      skipEmptyLines: true,
    })

    if (parsed.errors.length > 0 && parsed.data.length === 0) {
      throw new Error('El archivo CSV de socios no es válido.')
    }

    this.cache = parsed.data
      .map((row, index) => mapRow(row, index))
      .filter((socio) => socio.apellidoNombre.length > 0)

    return this.cache
  }
}
