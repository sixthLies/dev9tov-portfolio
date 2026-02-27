import { THEMES, useTheme } from "@/shared/lib/theme"
import { THEME_TOGGLE_ARIA_LABEL } from "../model/constants"

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
    <path
      d="M19 14.2A7.8 7.8 0 1 1 9.8 5a6.2 6.2 0 0 0 9.2 9.2Z"
      fill="currentColor"
    />
  </svg>
)

const SunIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
    <circle cx="12" cy="12" r="4.2" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M12 2.8v2.4M12 18.8v2.4M21.2 12h-2.4M5.2 12H2.8M18.4 5.6l-1.7 1.7M7.3 16.7l-1.7 1.7M18.4 18.4l-1.7-1.7M7.3 7.3 5.6 5.6" />
    </g>
  </svg>
)

export const ThemeToggle = () => {
  const { currentTheme, toggleTheme } = useTheme()
  const nextTheme = currentTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK
  const isDarkMode = currentTheme === THEMES.DARK

  return (
    <button
      type="button"
      className="header__theme-toggle focus-ring"
      onClick={toggleTheme}
      data-theme-target={nextTheme}
      aria-label={THEME_TOGGLE_ARIA_LABEL}
      title={THEME_TOGGLE_ARIA_LABEL}
    >
      <span className="header__theme-icon">
        {isDarkMode ? <SunIcon /> : <MoonIcon />}
      </span>
      <span className="header__theme-text">
        {isDarkMode ? "Light" : "Dark"}
      </span>
    </button>
  )
}
