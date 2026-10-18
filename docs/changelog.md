# Changelog

Registro de mejoras del rewrite React. El más reciente arriba.

## 2026-10-17

- Deploy a GitHub Pages: `base` de Vite, `basename` del router, assets con `publicUrl`, workflow que publica `dist` (Pages no sirve el `index.html` de desarrollo).

## 2026-10-01

- Contador de socios en `/directorio`: cuenta de 0 al total del repositorio, leyenda SOCIOS, colores del tema.
- Wiki del proyecto en `docs/` (sitio, patrones, este changelog).
- Skill y regla: no abrir el WordPress en vivo salvo desbloqueo explícito.

## 2026-09-26

- Paleta estándar en `theme.ts`: primary teal `#325158`, secondary gold `#f1e29f`; naranja pasado a `warning`.
- Header: degradé teal→gold, logo PNG teñido, sin texto al lado del logo.
- Footer: íconos mail / Facebook / Instagram teñidos; fondo teal y texto gold.
- Inicio: imágenes del carrusel; ícono Perfil del conservador con hover zoom.
- Directório: tabla alineada al CSV (categoría, mail, localidad, especialidad, redes); chip Activo gold; links teal.
- EmptyState: ícono de construcción outlined con contorno primary.
- Imágenes de actividades en `public/images/Actividades/`.
- Scaffold Vite + React + Router + MUI; capas de socios CSV/HTTP; páginas portadas desde el dump WordPress (sin archivos de phishing).
