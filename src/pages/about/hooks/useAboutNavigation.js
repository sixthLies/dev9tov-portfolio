import { useCallback, useMemo, useRef, useState } from "react"
import {
  ABOUT_SECTION_ITEMS,
  DEFAULT_ACTIVE_SECTION_ID,
} from "../model/sectionNav"
import { SECTION_IDS } from "../model/sectionIds"
import { ABOUT_OBSERVER_OPTIONS } from "../model/observerOptions"
import { useSectionSpy } from "./useSectionSpy"

const SECTION_ORDER = ABOUT_SECTION_ITEMS.map(({ id }) => id)

const createSectionRefSetters = (sectionIds, refs) => {
  return sectionIds.reduce((acc, sectionId) => {
    acc[sectionId] = (node) => {
      refs.current[sectionId] = node
    }
    return acc
  }, {})
}

export const useAboutNavigation = () => {
  const refs = useRef({})
  const [activeSectionId, setActiveSectionId] = useState(
    DEFAULT_ACTIVE_SECTION_ID,
  )

  const sectionRefSetters = useMemo(
    () => createSectionRefSetters(SECTION_ORDER, refs),
    [],
  )

  const scrollToSection = useCallback((sectionId) => {
    const node = refs.current[sectionId]
    if (!node) return

    node.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [])

  useSectionSpy({
    sectionIds: SECTION_ORDER,
    refs,
    onChange: setActiveSectionId,
    options: ABOUT_OBSERVER_OPTIONS,
  })

  return {
    sectionItems: ABOUT_SECTION_ITEMS,
    sectionIds: SECTION_IDS,
    activeSectionId,
    sectionRefSetters,
    scrollToSection,
  }
}
