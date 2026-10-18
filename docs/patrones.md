# Patrones

Usar tokens de `src/app/theme.ts` (`primary.main`, `secondary.main`, etc.). No hardcodear `#325158` ni `#f1e29f` en componentes.

## Paleta

| Token | Hex | Uso |
| --- | --- | --- |
| `primary.main` | `#325158` | Teal: texto, links, footer, número del contador, botones contained |
| `secondary.main` | `#f1e29f` | Gold: tinte de logos PNG, chip Activo, acentos, headers de la grilla |
| `warning.main` | `#E67B00` | Naranja legado; no es el color de marca actual |
| `text.primary` | `#325158` | Cuerpo |
| `background.default` | `#FAFAFA` | Fondo de página |

Tipografía: Tahoma / Segoe UI. Botones MUI sin elevation.

## Imágenes

`SiteImage` (`src/components/SiteImage.tsx`): si el archivo no carga, muestra un recuadro con el `alt`. No romper el layout.

PNG negros con transparencia (logo header, mail, Facebook, Instagram) se colorean con `bgcolor` + `maskImage` + `maskMode: 'alpha'`. El color visible es el `bgcolor` (hoy `secondary.main`).

Rutas públicas van con `publicUrl()` (`src/lib/publicUrl.ts`) para respetar `import.meta.env.BASE_URL` en GitHub Pages (`/asacor-react/...`). En local el base es `/`.

Rutas actuales (`IMAGE_PATHS` / carrusel):

- `/images/AsacorLogo.png` — logo nav
- `/images/mailLogo.png`, `facebookLogo.png`, `igLogo.png` — footer
- `/images/PerfilConservador.jpeg` — inicio, 96px, hover `scale(1.12)`
- `/images/carrousel/Carrousel1.jpg`, `Carrousel2.jpg`
- `/images/Actividades/Actividad1.jpeg` … `Actividad3.jpeg`

Fotos JPEG/JPG no se retintan: el color está en el archivo.

## Estados vacíos

`EmptyState`: título «En construcción». Ícono `ConstructionOutlined` con relleno `secondary` y trazo `primary` (`sx` con `theme.palette`, no `stroke: 'primary.main'` suelto).

## Socios

Capa desacoplada: `SocioRepository` en `src/features/socios/domain.ts`.

- Sin `VITE_SOCIOS_API_BASE_URL` → `CsvSocioRepository` lee `publicUrl('/data/directorio-de-socios.csv')`
- Con env → `HttpSocioRepository`: `GET {base}/socios?q=&page=&pageSize=` → `{ items, total }`

La UI (`SocioTable`, `SocioCounter`) no debe saber si hay CSV o HTTP.

Columnas CSV: Apellido y Nombre, Categoría, Mail de contacto, Localidad, Especialidad y/o interés, Redes/URL profesional.

- Chip **Activo**: `secondary.main` / texto `primary.main`
- Links de mail y redes: `color="primary"`
- Mail: partir por `/` y `mailto:`
- Redes: partir por `;`, armar links IG / http / LinkedIn
- Contador: anima 0 → `total` (no el filtro de búsqueda). Respeta `prefers-reduced-motion`

## Contenido vs presentación

Textos institucionales en `src/content/`. Páginas en `src/pages/` armando layout. No incrustar párrafos largos en el JSX.

## Cómo documentar un cambio

1. Código.
2. Si cambia una pantalla o un patrón: `docs/sitio.md` o `docs/patrones.md`.
3. Una viñeta en `docs/changelog.md` (fecha + por qué).
