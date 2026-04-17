import { access, copyFile } from "node:fs/promises"
import { constants } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const distDir = path.resolve(__dirname, "..", "dist")
const sourcePath = path.join(distDir, "index.html")
const targetPath = path.join(distDir, "404.html")

await access(sourcePath, constants.F_OK)
await copyFile(sourcePath, targetPath)

console.log("[postbuild-gh-pages] Copied dist/index.html -> dist/404.html")
