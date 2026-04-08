import { Link } from "react-router"
import { images } from "@/shared/assets"
import { Reveal } from "@/shared/ui"
import { NOT_FOUND } from "../model/constants"
import { notFoundClasses } from "../model/classes"

export const NotFoundPage = () => {
  const { pageClass, blockClass, buttonClass, textClass } = notFoundClasses

  return (
    <section className={pageClass}>
      <Reveal preset="media">
        <img
          width={`${NOT_FOUND.imageWidthPx}px`}
          src={images.notFoundPageImg}
          alt={NOT_FOUND.imageAlt}
        />
      </Reveal>

      <Reveal preset="text" index={1}>
        <div className={blockClass}>
          <p className={textClass}>{NOT_FOUND.message}</p>

          <Link className={buttonClass} to={NOT_FOUND.homePath}>
            {NOT_FOUND.homeLinkText}
          </Link>
        </div>
      </Reveal>
    </section>
  )
}
