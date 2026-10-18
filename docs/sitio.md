# Sitio

Aplicación Vite + React + TypeScript (strict) + React Router + MUI. Shell en `src/app/layout/AppShell.tsx`: header, `Outlet` con lazy + `Suspense`, footer.

Publicación: GitHub Pages en `https://xavier3rd.github.io/asacor-react/`. El router usa `basename` = `import.meta.env.BASE_URL`. Workflow: `.github/workflows/deploy-pages.yml`.

Constantes de marca, nav e imágenes: `src/content/site.ts`. Textos largos: `src/content/*.ts`.

## Stack

- Vite 8, React 19, React Router 7
- MUI 9, Emotion, MUI X Data Grid 9
- Papa Parse (CSV de socios)

## Rutas

Definidas en `src/app/router.tsx`. El ítem de nav **Socios** apunta a `/directorio`.

| Ruta | Página | Qué muestra |
| --- | --- | --- |
| `/` | `InicioPage` | Carrusel (`Carrousel1/2.jpg`), ícono de perfil con zoom al hover, lista «Perfil del conservador», bloque de Facebook |
| `/quienes-somos` | `QuienesSomosPage` | Tabs: Historia, Nuestra propuesta, Estatuto (PDF), Comisión Directiva, Comisiones de trabajo, Cómo asociarse |
| `/actividades` | `ActividadesPage` | Agenda 2024, tres fotos, botones a redes, galería en «En construcción» |
| `/directorio` | `DirectorioPage` | Formulario de actualización (Google Form), contador 0→total, tabla de socios, entidades relacionadas en construcción |
| `/biblioteca` | `BibliotecaPage` | Header + `EmptyState` |
| `/libros` | `LibrosPage` | Header + `EmptyState` |
| `*` | `NotFoundPage` | 404 con botón a inicio |

## Layout

**Header** (`Header.tsx`): degradé `primary` → `secondary` (15% / 40%). Logo `AsacorLogo.png` teñido a `secondary.main` con máscara CSS (el PNG es negro + alpha). Nav desktop; drawer en mobile.

**Footer** (`Footer.tsx`): fondo `primary`, texto `secondary`. Contacto (mail) y redes (Facebook, Instagram) con íconos PNG teñidos igual que el logo.

## Contacto y enlaces externos

| Dato | Valor / origen |
| --- | --- |
| Email | `info@asacor.com.ar` |
| Tesorería | `tesoreria.asacor@gmail.com` |
| Facebook | `https://www.facebook.com/asacor` |
| Instagram | `https://www.instagram.com/asacorargentina/` |
| Admisión | Google Form en `SITE.admissionForm` |
| Actualización de socios | Google Form en `SITE.sociosUpdateForm` |
| Estatuto | `/docs/estatuto-asacor-2021.pdf` |

## Sitio WordPress original

El WordPress en `asacor.com.ar` **sigue infectado** (plugin falso `wordpress-defender`). No abrir ni scrapear en el navegador. Ver `.cursor/rules/asacor-live-site.mdc`. Esta app es el reemplazo; el contenido salió del dump/WXR y del CSV, no del sitio en vivo.
