/** Prefix a file from `public/` with Vite's `base` (needed on GitHub Pages). */
export function publicUrl(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
