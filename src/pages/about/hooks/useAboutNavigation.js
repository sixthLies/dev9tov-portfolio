import { useCallback, useRef } from "react"
import { SECTION_IDS } from "../model/sectionIds"

const SECTION_ORDER = Object.values(SECTION_IDS)

export const useAboutNavigation = () => {
  const refs = useRef({})
  const sectionRefSetters = SECTION_ORDER.reduce((acc, sectionId) => {
    acc[sectionId] = (node) => {
      refs.current[sectionId] = node
    }
    return acc
  }, {})

  const scrollToSection = useCallback((sectionId) => {
    const node = refs.current[sectionId]
    if (!node) return

    node.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [refs])

  return {
    sectionIds: SECTION_IDS,
    sectionRefSetters,
    scrollToSection,
  }
}
