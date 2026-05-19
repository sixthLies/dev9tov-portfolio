import { useProcessConnector } from "../lib/useProcessConnector"
import { ProcessList } from "./ProcessList"

export const ProcessWrapper = ({
  root,
  path,
  pathAura,
  pathLine,
  pathNode,
  pathNodeInner,
  list,
}) => {
  const { connector, getItemRef, rootRef } = useProcessConnector()

  return (
    <div className={root} ref={rootRef}>
      {connector ? (
        <svg
          className={path}
          viewBox={`0 0 ${connector.width} ${connector.height}`}
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <filter
              id="process-connector-blur"
              x="-30%"
              y="-30%"
              width="160%"
              height="160%"
            >
              <feGaussianBlur stdDeviation="9" />
            </filter>
          </defs>
          <path className={pathAura} d={connector.d} pathLength="1" />
          <path className={pathLine} d={connector.d} pathLength="1" />
          {connector.nodes.map((node, index) => (
            <g className={pathNode} key={`${node.x}-${node.y}-${index}`}>
              <circle cx={node.x} cy={node.y} r="13" />
              <circle className={pathNodeInner} cx={node.x} cy={node.y} r="4" />
            </g>
          ))}
        </svg>
      ) : null}
      <ProcessList getItemRef={getItemRef} list={list} />
    </div>
  )
}
