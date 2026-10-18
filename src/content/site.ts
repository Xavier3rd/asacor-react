import { publicUrl } from '../lib/publicUrl'

export const SITE = {
  name: 'ASACOR',
  fullName:
    'Asociación Argentina de Profesionales en Conservación y Restauración',
  email: 'info@asacor.com.ar',
  treasuryEmail: 'tesoreria.asacor@gmail.com',
  facebook: 'https://www.facebook.com/asacor',
  instagram: 'https://www.instagram.com/asacorargentina/',
  admissionForm: 'https://forms.gle/FFdCFVhvQZwm8zjC8',
  sociosUpdateForm: 'https://forms.gle/Yt88Komy5vYeBtNe6',
  estatutoPdf: publicUrl('/docs/estatuto-asacor-2021.pdf'),
} as const

export const NAV_ITEMS = [
  { label: 'Inicio', to: '/' },
  { label: 'Quiénes somos', to: '/quienes-somos' },
  { label: 'Actividades', to: '/actividades' },
  { label: 'Socios', to: '/directorio' },
  { label: 'Biblioteca', to: '/biblioteca' },
  { label: 'Libros', to: '/libros' },
] as const

export const IMAGE_PATHS = {
  logo: publicUrl('/images/AsacorLogo.png'),
  mail: publicUrl('/images/mailLogo.png'),
  facebook: publicUrl('/images/facebookLogo.png'),
  instagram: publicUrl('/images/igLogo.png'),
  perfilConservador: publicUrl('/images/PerfilConservador.jpeg'),
  actividad1: publicUrl('/images/Actividades/Actividad1.jpeg'),
  actividad2: publicUrl('/images/Actividades/Actividad2.jpeg'),
  actividad3: publicUrl('/images/Actividades/Actividad3.jpeg'),
} as const

export const CAROUSEL_SLIDES = [
  {
    src: publicUrl('/images/carrousel/Carrousel1.jpg'),
    alt: 'Herramientas de conservación y restauración',
  },
  {
    src: publicUrl('/images/carrousel/Carrousel2.jpg'),
    alt: 'Instrumental de conservación y restauración',
  },
] as const
