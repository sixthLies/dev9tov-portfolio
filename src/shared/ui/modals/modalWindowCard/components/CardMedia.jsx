import { isInlineMarkup } from "../utils"

export const CardMedia = ({ img, title }) => {
  if (!img) return null

  if (isInlineMarkup(img)) {
    return <div dangerouslySetInnerHTML={{ __html: img }} />
  }

  return <img className="social-card__qr" src={img} alt={title} />
}
