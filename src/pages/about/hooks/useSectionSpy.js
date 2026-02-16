import { useEffect } from "react"
import { getMostVisibleEntry } from "../lib/getMostVisibleEntry"

const getObservedNodes = (sectionIds, refs) => {
  return sectionIds.map((id) => refs.current[id]).filter(Boolean)
}

export const useSectionSpy = ({ sectionIds, refs, onChange, options }) => {
  useEffect(() => {
    if (!sectionIds.length) return
    if (typeof IntersectionObserver === "undefined") return

    const nodes = getObservedNodes(sectionIds, refs)
    if (!nodes.length) return

    const observer = new IntersectionObserver((entries) => {
      const visibleEntry = getMostVisibleEntry(entries)
      const nextId = visibleEntry?.target?.id

      if (!nextId) return
      onChange(nextId)
    }, options)

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [sectionIds, refs, onChange, options])
}
