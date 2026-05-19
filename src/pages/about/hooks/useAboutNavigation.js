import { useRef } from "react"
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

  return {
    sectionIds: SECTION_IDS,
    sectionRefSetters,
  }
}
