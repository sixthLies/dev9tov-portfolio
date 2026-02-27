const SHARED_EASING = "cubic-bezier(0.22, 1, 0.36, 1)"

export const REVEAL_PRESETS = Object.freeze({
  section: Object.freeze({
    rootMargin: "0px 0px -12% 0px",
    threshold: 0.12,
    durationMs: 560,
    easing: SHARED_EASING,
    fromY: 26,
    fromScale: 0.992,
    fromBlur: 0,
    staggerStep: 70,
    maxDelayCap: 280,
  }),
  card: Object.freeze({
    rootMargin: "0px 0px -10% 0px",
    threshold: 0.15,
    durationMs: 460,
    easing: SHARED_EASING,
    fromY: 18,
    fromScale: 0.986,
    fromBlur: 0,
    staggerStep: 56,
    maxDelayCap: 280,
  }),
  text: Object.freeze({
    rootMargin: "0px 0px -8% 0px",
    threshold: 0.2,
    durationMs: 360,
    easing: SHARED_EASING,
    fromY: 10,
    fromScale: 0.998,
    fromBlur: 0,
    staggerStep: 44,
    maxDelayCap: 220,
  }),
  media: Object.freeze({
    rootMargin: "0px 0px -8% 0px",
    threshold: 0.18,
    durationMs: 520,
    easing: SHARED_EASING,
    fromY: 16,
    fromScale: 0.982,
    fromBlur: 2,
    staggerStep: 60,
    maxDelayCap: 300,
  }),
  inline: Object.freeze({
    rootMargin: "0px 0px -6% 0px",
    threshold: 0.22,
    durationMs: 320,
    easing: SHARED_EASING,
    fromY: 6,
    fromScale: 0.998,
    fromBlur: 0,
    staggerStep: 40,
    maxDelayCap: 180,
  }),
})

export const REVEAL_DEFAULT_PRESET = "card"

export const getRevealPresetConfig = (presetName) => {
  return REVEAL_PRESETS[presetName] || REVEAL_PRESETS[REVEAL_DEFAULT_PRESET]
}
