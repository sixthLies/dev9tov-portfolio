import { Link } from "react-router"
import { images } from "@/shared/assets"
import { NOT_FOUND } from "../model/constants"
import { notFounfClasses } from "../model/classes"

export const NotFoundPage = () => {
  return (
    <section className={notFounfClasses}>
      <img
        width={`${NOT_FOUND.imageWidthPx}px`}
        src={images.notFoundPageImg}
        alt={NOT_FOUND.imageAlt}
      />

      <div className={NOT_FOUND.blockClass}>
        <p className={NOT_FOUND.textClass}>{NOT_FOUND.message}</p>

        <Link className={NOT_FOUND.buttonClass} to={NOT_FOUND.homePath}>
          {NOT_FOUND.homeLinkText}
        </Link>
      </div>
    </section>
  )
}
