import { Reveal } from "@/shared/ui"

export const ProcessItem = ({
  step,
  index,
  item,
  dot,
  dotNum,
  content,
  title,
  text,
}) => {
  return (
    <Reveal preset="card" index={index}>
      <div className={item}>
        <div className={dot} aria-hidden="true">
          <span className={dotNum}>{step.n}</span>
        </div>
        <div className={content}>
          <h3 className={title}>{step.title}</h3>
          <p className={text}>{step.text}</p>
        </div>
      </div>
    </Reveal>
  )
}
