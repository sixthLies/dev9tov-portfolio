import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const PUBLIC_BASE = "/dev9tov-portfolio/"

export const normalizeBaseRedirectLocation = (url = "", base = PUBLIC_BASE) => {
  const normalizedBase = base.endsWith("/") ? base : `${base}/`
  const baseWithoutTrailingSlash = normalizedBase.slice(0, -1)

  if (!url) return null

  const [pathname, search = ""] = url.split("?")
  if (pathname !== baseWithoutTrailingSlash) return null

  return `${normalizedBase}${search ? `?${search}` : ""}`
}

const createBaseRedirectMiddleware = (base = PUBLIC_BASE) => (req, res, next) => {
  const redirectLocation = normalizeBaseRedirectLocation(req.url, base)

  if (!redirectLocation) {
    next()
    return
  }

  res.statusCode = 302
  res.setHeader("Location", redirectLocation)
  res.end()
}

const baseRedirectPlugin = (base = PUBLIC_BASE) => ({
  name: "base-redirect-plugin",
  configureServer(server) {
    server.middlewares.use(createBaseRedirectMiddleware(base))
  },
  configurePreviewServer(server) {
    server.middlewares.use(createBaseRedirectMiddleware(base))
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), baseRedirectPlugin(PUBLIC_BASE)],
  base: PUBLIC_BASE,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
