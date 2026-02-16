const OBSERVER_ROOT_MARGIN_TOP = "-30%"
const OBSERVER_ROOT_MARGIN_BOTTOM = "-55%"

export const ABOUT_OBSERVER_OPTIONS = Object.freeze({
  root: null,
  rootMargin: `${OBSERVER_ROOT_MARGIN_TOP} 0px ${OBSERVER_ROOT_MARGIN_BOTTOM} 0px`,
  threshold: [0.12, 0.2, 0.35, 0.5, 0.65],
})
