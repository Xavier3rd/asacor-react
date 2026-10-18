import { publicUrl } from '../../lib/publicUrl'
import { CsvSocioRepository } from './csv/CsvSocioRepository'
import { HttpSocioRepository } from './http/HttpSocioRepository'
import type { SocioRepository } from './domain'

const CSV_URL = publicUrl('/data/directorio-de-socios.csv')

export function createSocioRepository(): SocioRepository {
  const baseUrl = import.meta.env.VITE_SOCIOS_API_BASE_URL?.trim()
  if (baseUrl) {
    return new HttpSocioRepository(baseUrl)
  }
  return new CsvSocioRepository(CSV_URL)
}
