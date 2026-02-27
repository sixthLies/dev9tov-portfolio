import { createContext, useCallback, useEffect, useMemo, useState } from "react"
import {
  THEMES,
  THEME_STORAGE_KEY,
  getSystemTheme,
  isThemeValue,
} from "./constants"

export const ThemeContext = createContext(null)

const getStoredTheme = () => {
  if (typeof window === "undefined") return null

  try {
    const saved = window.localStorage.getItem(THEME_STORAGE_KEY)
    return isThemeValue(saved) ? saved : null
  } catch {
    return null
  }
}

const getThemeFromDom = () => {
  if (typeof document === "undefined") return null

  const themeFromDom = document.documentElement.dataset.theme
  return isThemeValue(themeFromDom) ? themeFromDom : null
}

const resolveInitialTheme = () => {
  const storedTheme = getStoredTheme()
  if (storedTheme) return storedTheme

  const domTheme = getThemeFromDom()
  if (domTheme) return domTheme

  return getSystemTheme()
}

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState(resolveInitialTheme)
  const [hasStoredPreference, setHasStoredPreference] = useState(() => {
    return Boolean(getStoredTheme())
  })

  useEffect(() => {
    if (typeof document === "undefined") return

    document.documentElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    if (!hasStoredPreference) return
    if (typeof window === "undefined") return

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch {
      // Ignore localStorage write issues (private mode / browser policy).
    }
  }, [hasStoredPreference, theme])

  useEffect(() => {
    if (typeof document === "undefined") return
    if (typeof window === "undefined") return

    const rafId = window.requestAnimationFrame(() => {
      document.documentElement.dataset.themeReady = "true"
    })

    return () => window.cancelAnimationFrame(rafId)
  }, [])

  useEffect(() => {
    if (hasStoredPreference) return
    if (typeof window === "undefined") return
    if (typeof window.matchMedia !== "function") return

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleSystemThemeChange = () => {
      setThemeState(mediaQuery.matches ? THEMES.DARK : THEMES.LIGHT)
    }

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleSystemThemeChange)
      return () =>
        mediaQuery.removeEventListener("change", handleSystemThemeChange)
    }

    mediaQuery.addListener(handleSystemThemeChange)
    return () => mediaQuery.removeListener(handleSystemThemeChange)
  }, [hasStoredPreference])

  const setTheme = useCallback((nextTheme) => {
    if (!isThemeValue(nextTheme)) return

    setHasStoredPreference(true)
    setThemeState(nextTheme)
  }, [])

  const toggleTheme = useCallback(() => {
    setHasStoredPreference(true)
    setThemeState((prevTheme) =>
      prevTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK,
    )
  }, [])

  const value = useMemo(
    () => ({
      currentTheme: theme,
      setTheme,
      toggleTheme,
    }),
    [theme, setTheme, toggleTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
