import { useCallback, useMemo, useRef } from "react"

export const useGoalsConnector = (itemCount) => {
  const rootRef = useRef(null)
  const itemRefs = useRef([])

  const itemRefCallbacks = useMemo(() => {
    return Array.from({ length: itemCount }, (_, index) => (node) => {
      itemRefs.current[index] = node
    })
  }, [itemCount])

  const getItemRef = useCallback(
    (index) => itemRefCallbacks[index],
    [itemRefCallbacks],
  )

  return {
    connector: null,
    getItemRef,
    rootRef,
  }
}
