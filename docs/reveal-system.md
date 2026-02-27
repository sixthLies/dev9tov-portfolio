# Reveal System

## Location
- `src/shared/config/revealPresets.js`
- `src/shared/lib/reveal-on-scroll/useRevealOnScroll.js`
- `src/shared/lib/reveal-on-scroll/observerPool.js`
- `src/shared/ui/reveal/Reveal.jsx`
- `src/shared/styles/state/visibility.scss`

## API
Use `Reveal` for scroll-into-view animation:

```jsx
<Reveal preset="card" index={2}>
  <article>...</article>
</Reveal>
```

Props:
- `preset`: `section | card | text | media | inline`
- `index`: list index for staggered delay
- `step`: optional delay step override (ms)
- `maxDelayCap`: optional delay cap (ms)
- `once`: default `true`
- `root`, `rootMargin`, `threshold`: optional observer overrides
- `as`: semantic wrapper element/component

## Preset Rules
- `section`: big blocks and page-level containers
- `card`: cards/tiles in grid or list
- `text`: headings/subtitles/body intro text
- `media`: image/video-focused elements
- `inline`: compact secondary UI (small links/chips)

## Stagger Rules
- Use `index` from list rendering.
- Keep short chain: default preset caps limit delay to avoid long waits.
- Prefer staggering only the primary list/grid, not every nested element.

## Reduced Motion
- `prefers-reduced-motion: reduce` disables transition and shows content immediately.
- Hook also short-circuits reveal logic in reduced-motion mode.

## Performance Notes
- `IntersectionObserver` instances are pooled by `root/rootMargin/threshold`.
- Observers auto-clean up on unmount and when last element detaches.
- Animations are GPU-friendly (`opacity`, `transform`, optional small `blur` for media).

## What To Avoid
- Don’t animate every icon/button.
- Don’t stack multiple reveal wrappers on the same small element.
- Don’t add timer-based reveal as primary behavior.
