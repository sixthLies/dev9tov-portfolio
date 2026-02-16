import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { App } from "../layout"

// Global styles entrypoint (single import for the whole app)
import "@/shared/styles/main.scss"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
