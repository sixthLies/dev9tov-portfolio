export const THEME_STORAGE_KEY = "hh-theme"

export const THEMES = Object.freeze({
  DARK: "dark",
  LIGHT: "light",
})

export const isThemeValue = (value) => {
  return value === THEMES.DARK || value === THEMES.LIGHT
}

export const getSystemTheme = () => {
  if (typeof window === "undefined") return THEMES.DARK
  if (typeof window.matchMedia !== "function") return THEMES.DARK

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? THEMES.DARK
    : THEMES.LIGHT
}
