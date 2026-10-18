# ASACOR

Sitio institucional de la Asociación Argentina de Profesionales en Conservación y Restauración.

Documentación del producto: [docs/README.md](./docs/README.md) (páginas, patrones, changelog).

Demo: [https://xavier3rd.github.io/asacor-react/](https://xavier3rd.github.io/asacor-react/)

## Desarrollo

```bash
npm install
npm run dev
```

## GitHub Pages

GitHub no ejecuta Vite: hay que **buildear** y publicar `dist`. El workflow `.github/workflows/deploy-pages.yml` lo hace en cada push a `main`.

1. Subí **todo** el proyecto (`src/`, `public/`, `.github/`, no solo los archivos de la raíz).
2. En el repo: **Settings → Pages → Source → GitHub Actions**.
3. Esperá el workflow **Deploy GitHub Pages**. La URL queda en `https://<usuario>.github.io/<repo>/`.

## Imágenes y documentos

Copiá archivos a:

- `public/images/` — ver `public/images/README.md`
- `public/docs/estatuto-asacor-2021.pdf`

Si faltan, la interfaz muestra un recuadro con el nombre del archivo.

## Directorio de socios

Por defecto lee `public/data/directorio-de-socios.csv`.

Para un backend (TypeORM + PostgreSQL o Entity Framework + SQL Server):

1. Copiá `.env.example` a `.env`
2. Definí `VITE_SOCIOS_API_BASE_URL=https://api.ejemplo.com`
3. El front llama `GET {base}/socios?q=&page=&pageSize=`
4. La respuesta esperada es `{ "items": Socio[], "total": number }`

La tabla no cambia: usa `SocioRepository`.
