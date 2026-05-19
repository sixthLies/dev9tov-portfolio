# HH.ru Technical Documentation

Last updated: 2026-05-19

## 1. Project Overview

`HH.ru` is a client-side portfolio SPA built with React 19, React Router 7 and Vite through `rolldown-vite`. The application has no backend API, no SSR layer and no global state manager. Runtime content is stored in local configuration files and assets.

The current codebase is intentionally compact and follows a pragmatic layered architecture rather than a full Feature-Sliced Design implementation.

## 2. Actual Source Structure

```text
src/
  app/
    entry/
    layout/
    routing/
  pages/
    about/
    contacts/
    home/
    not-found/
    projects/
    skills/
  shared/
    assets/
    config/
    const/
    lib/
    styles/
    ui/
  widgets/
    footer/
    header/
    stars/
```

There are no active `features` or `entities` directories in the current source tree. If these layers are introduced later, they should contain real domain/use-case code rather than placeholder files.

## 3. Architecture Layers

`app` contains the application entrypoint, router provider and layout shell.

`pages` contains route-level slices. A page slice may include `ui`, `model`, `lib` and `hooks` folders. Page-specific content and behavior should stay inside the page slice.

`widgets` contains layout-level blocks used across routes: `Header`, `Footer` and the global `Stars` background.

`shared` contains reusable UI primitives, shared config, assets, utility functions and the global SCSS system.

Allowed dependency direction:

```text
app -> pages/widgets
pages -> shared
widgets -> shared
shared -> shared/*
```

Do not import page-specific code into `shared` or `widgets`.

## 4. Tooling and Commands

Real scripts from `package.json`:

```bash
npm run dev
npm run build
npm run lint
npm run test:links
npm run test:projects-media
npm run test:routing
npm run preview
```

There is no dedicated `typecheck` script because the app source is currently JavaScript/JSX, not TypeScript.

The production build runs:

```bash
vite build && node scripts/postbuild-gh-pages.mjs
```

`scripts/postbuild-gh-pages.mjs` copies `dist/index.html` to `dist/404.html` for SPA fallback support.

## 5. Routing and Versioned Content

Routes are centralized in `src/app/routing` and shared route constants live in `src/shared/config/routes.js`.

The site can switch content through `src/shared/config/siteVersions.js` and `src/shared/lib/useSiteVersion.js`. About page sections read the active version and render version-specific copy where needed.

Keep versioned content in `siteVersions.js` when the same UI should display different text/data. Keep local constants in section folders only when the data is truly section-specific and not versioned.

## 6. Shared UI

The main shared UI entrypoint is `src/shared/ui/index.js`.

Key shared blocks/components:

- `Reveal` for viewport-based entrance animations.
- `Cards` / `Card` for home and contact card patterns.
- `InfoBlock` and `LinksBlock` for structured project/contact content.
- `IconsList`, `ListMenu` and `MailButton` for navigation and contact surfaces.
- Modal primitives in `src/shared/ui/modals`.

Before adding a new shared component, check whether the behavior is page-specific. Page-only UI should stay in the page slice.

## 7. SCSS and Design Tokens

Global styles are imported once in `src/app/entry/main.jsx` through `src/shared/styles/main.scss`.

The SCSS system follows SMACSS-style layers:

```text
base -> theme -> layout -> modules -> state -> pages
```

Design tokens live mainly in:

- `src/shared/styles/theme/tokens.scss`
- `src/shared/styles/configs/variables.scss`
- `src/shared/styles/configs/mixins`

Use CSS custom properties and existing SCSS variables for colors, radii, shadows, transitions, spacing and breakpoints. Avoid hard-coded colors or layout constants when a token already exists.

Page styles live under `src/shared/styles/pages`. About page section styles live under `src/shared/styles/pages/about/sections`.

## 8. Animation Approach

Use `Reveal` for generic enter-on-scroll motion. See `docs/reveal-system.md`.

Complex page-specific motion is implemented with CSS keyframes and should respect:

- subtle movement over flashy effects;
- transform/opacity where possible;
- `prefers-reduced-motion` fallbacks for looping or decorative animation;
- no layout-affecting animation for repeated cards or navigation.

Current About-specific animation includes:

- Hero visual ambient motion.
- Process connector drawing/flow on tablet and desktop.
- Goals card floating/hover accents.
- About closing CTA link loop animation.

## 9. Responsive Strategy

The project is mobile-first. Breakpoints are exposed through SCSS mixins in `src/shared/styles/configs/mixins/breakpoints.mixin.scss`.

Common conventions:

- stack content vertically on mobile;
- progressively introduce multi-column layouts from tablet/desktop breakpoints;
- keep cards and interactive controls stable in size;
- hide decorative connector systems on mobile when they reduce readability;
- keep primary content available without hover.

## 10. About Page

About page composition lives in `src/pages/about/ui/AboutPage.jsx` and section exports live in `src/pages/about/ui/sections/index.js`.

Current sections:

- `Hero` - opening identity/positioning block with premium visual treatment.
- `Value` / `WhatIDo` - compact value cards describing what the developer does.
- `Experience` - versioned experience cards with impact labels from `siteVersions.js` and `impact.js`.
- `Process` - connected process system with dynamic SVG connector on tablet/desktop and no connector on mobile.
- `Goals` - premium strategic goal cards styled as a connected/cinematic flow continuation of Process, with lightweight hover glow.
- `CTA` / `AboutClosing` - closing action block with animated link treatment.

Section conventions:

- place section UI in `ui/sections/<SectionName>/ui`;
- keep section class maps in `model/classes.js`;
- keep static section-only copy in `model/constants.js`;
- use versioned data from `siteVersions.js` when text differs by site version;
- keep connector or measurement hooks in `lib`;
- keep styles in `shared/styles/pages/about/sections/<section>.scss`;
- do not introduce unused class keys or placeholder constants.

## 11. Connector Systems

The Process section uses `useProcessConnector` with refs and `getBoundingClientRect` to calculate SVG paths. The SVG overlay is positioned behind cards and is recalculated on resize.

On mobile, the Process connector is hidden by CSS and the section reads as a clean vertical stack.

The Goals section currently uses static card composition and CSS motion rather than a runtime connector hook. Old unused Goals connector code was removed during cleanup.

## 12. Assets

Small app images and contact media are imported as ES modules from `src/shared/assets/images`.

Project media is managed through project-specific asset folders and validated by `npm run test:projects-media`.

Keep assets only when they are referenced by code or public metadata. Before deleting an asset, search for direct imports, barrel exports and string references.

## 13. Quality Gates

Before pushing meaningful changes, run:

```bash
npm run lint
npm run build
npm run test:links
npm run test:projects-media
npm run test:routing
```

If TypeScript is introduced later, add a real `typecheck` script and include it in this checklist.

## 14. Current Cleanup Notes

The pre-commit cleanup on 2026-05-19 removed unused About section code, unused card props/classes, an unused Goals connector hook, unused Hero button code, unused contact QR/avatar assets and stale image exports.

Intentional temporary business behavior remains in:

- `HeaderNav.jsx`: projects link is hidden for the technical support version.
- `FooterNav.jsx`: Gmail social item is hidden from the footer.
- `HomePage.jsx`: projects card is disabled for the technical support version.

Those branches are active product behavior and should not be removed without changing the content strategy.
