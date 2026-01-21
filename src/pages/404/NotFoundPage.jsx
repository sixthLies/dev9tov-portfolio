import { Link } from "react-router"
import { images } from "@/shared/assets"

export const NotFoundPage = () => {
  return (
    <section className="not-found">
      <img width="500px" src={images.notFoundPageImg} alt="404" />

      <div className="not-found__block">
        <p className="not-found__text">
          Возможно, страница, которую вы ищете, была удалена,
          <br /> изменено её название или она временно недоступна.
        </p>
        <button className="not-found__btn">
          <Link to="/">Вернуться на главную страницу</Link>
        </button>
      </div>
      
    </section>
  )
}
