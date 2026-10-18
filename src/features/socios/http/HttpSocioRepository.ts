import type { Socio, SocioListParams, SocioListResult, SocioRepository } from '../domain'

type SociosApiResponse = {
  items: Socio[]
  total: number
}

export class HttpSocioRepository implements SocioRepository {
  private readonly baseUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  async list(params: SocioListParams = {}): Promise<SocioListResult> {
    const url = new URL('socios', this.ensureTrailingSlash(this.baseUrl))
    if (params.q) {
      url.searchParams.set('q', params.q)
    }
    url.searchParams.set('page', String(params.page ?? 0))
    url.searchParams.set('pageSize', String(params.pageSize ?? 10))

    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('No se pudo obtener el directorio desde el servidor.')
    }

    const data = (await response.json()) as SociosApiResponse
    return {
      items: data.items ?? [],
      total: data.total ?? 0,
    }
  }

  private ensureTrailingSlash(value: string): string {
    return value.endsWith('/') ? value : `${value}/`
  }
}
