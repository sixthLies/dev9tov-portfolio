# Theme System

## Location
- `src/shared/lib/theme/ThemeProvider.jsx`
- `src/shared/lib/theme/useTheme.js`
- `src/shared/lib/theme/constants.js`
- `src/shared/styles/theme/tokens.scss`
- `src/widgets/header/ui/ThemeToggle.jsx`

## Architecture
- Theme is controlled through `data-theme` on `document.documentElement`.
- Available values: `dark`, `light`.
- Default boot logic:
  1. read `localStorage` key `hh-theme`
  2. fallback to `prefers-color-scheme`
  3. fallback to `dark`

## No-Flash Boot
- `index.html` runs a tiny inline script before React mount.
- Script sets `data-theme` early, so first paint uses the correct palette.

## Provider API
- `useTheme()` returns:
  - `currentTheme`
  - `setTheme(theme)`
  - `toggleTheme()`

## Persistence
- User-selected theme is stored in `localStorage` as `hh-theme`.
- If user has no stored preference, system theme changes can update current theme.

## Styling Rules
- Components must use CSS variables only (`var(--...)`).
- Theme-specific values live in `tokens.scss`.
- Use semantic tokens (`--color-text-primary`, `--border-subtle`, etc.), avoid hardcoded colors in component styles.

## Motion
- Theme transitions are enabled only after mount via `data-theme-ready="true"`.
- Transition targets are explicitly listed in `base/global.scss` (no universal `*` transition).
- `prefers-reduced-motion: reduce` disables theme transition effects.

## Recommendations
- Animate only `background-color`, `color`, `border-color`, `box-shadow`, `fill`, `stroke`.
- Keep toggle interactions quick and simple (small transform + icon swap).
