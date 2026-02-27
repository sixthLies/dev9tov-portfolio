import { useRevealOnScroll } from "@/shared/lib/reveal-on-scroll/useRevealOnScroll"
import {
  REVEAL_DEFAULT_PRESET,
  REVEAL_PRESETS,
  getRevealPresetConfig,
} from "@/shared/config/revealPresets"

const MAX_DELAY_MS = 400
const DELAY_BUCKET_MS = 20

const clampNumber = (value, min, max) => {
  return Math.min(Math.max(value, min), max)
}

const normalizeInteger = (value, fallback = 0) => {
  const normalized = Number.parseInt(value, 10)
  if (Number.isNaN(normalized)) return fallback
  return normalized
}

const normalizePositive = (value, fallback) => {
  const normalized = Number.parseInt(value, 10)
  if (Number.isNaN(normalized)) return fallback
  return Math.max(normalized, 0)
}

const getDelayMs = ({
  index,
  delay,
  step,
  maxDelayCap,
  presetStep,
  presetMaxDelayCap,
}) => {
  const normalizedIndex = normalizePositive(
    index ?? delay,
    0,
  )

  const normalizedStep = clampNumber(
    normalizePositive(step, presetStep),
    20,
    120,
  )
  const normalizedCap = clampNumber(
    normalizePositive(maxDelayCap, presetMaxDelayCap),
    0,
    MAX_DELAY_MS,
  )

  if (normalizedStep === 0 || normalizedCap === 0 || normalizedIndex === 0) {
    return 0
  }

  const maxIndex = Math.floor(normalizedCap / normalizedStep)
  const limitedIndex = clampNumber(normalizedIndex, 0, maxIndex)
  return limitedIndex * normalizedStep
}

const getDelayClass = (delayMs) => {
  const normalized = clampNumber(
    Math.round(delayMs / DELAY_BUCKET_MS) * DELAY_BUCKET_MS,
    0,
    MAX_DELAY_MS,
  )

  return `reveal--delay-${normalized}`
}

export const Reveal = ({
  as: Component = "div",
  className = "",
  preset = REVEAL_DEFAULT_PRESET,
  index = 0,
  delay,
  step,
  maxDelayCap,
  once = true,
  root = null,
  rootMargin,
  threshold,
  children,
  ...props
}) => {
  const hasPreset = Object.prototype.hasOwnProperty.call(REVEAL_PRESETS, preset)
  const resolvedPreset = hasPreset ? preset : REVEAL_DEFAULT_PRESET
  const presetConfig = getRevealPresetConfig(resolvedPreset)
  const resolvedRootMargin = rootMargin ?? presetConfig.rootMargin
  const resolvedThreshold = threshold ?? presetConfig.threshold

  const { ref, isRevealed } = useRevealOnScroll({
    once,
    root,
    rootMargin: resolvedRootMargin,
    threshold: resolvedThreshold,
  })

  const delayClass = getDelayClass(
    getDelayMs({
      index,
      delay,
      step,
      maxDelayCap,
      presetStep: presetConfig.staggerStep,
      presetMaxDelayCap: presetConfig.maxDelayCap,
    }),
  )

  const durationClass = `reveal--duration-${clampNumber(
    normalizeInteger(presetConfig.durationMs, 420),
    280,
    640,
  )}`

  const classes = [
    "reveal",
    `reveal--preset-${resolvedPreset}`,
    durationClass,
    delayClass,
    isRevealed ? "reveal--visible" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <Component
      ref={ref}
      className={classes}
      data-reveal-preset={resolvedPreset}
      {...props}
    >
      {children}
    </Component>
  )
}
