export type Socio = {
  id: string
  apellidoNombre: string
  categoria: string
  correo: string
  localidad: string
  especialidad: string
  redes: string
}

export type SocioListParams = {
  q?: string
  page?: number
  pageSize?: number
}

export type SocioListResult = {
  items: Socio[]
  total: number
}

export type SocioRepository = {
  list: (params?: SocioListParams) => Promise<SocioListResult>
}
