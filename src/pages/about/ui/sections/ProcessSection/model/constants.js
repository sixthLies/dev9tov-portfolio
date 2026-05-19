import firstProcessIcon from "@/shared/assets/icons/about/svg/1st-card-icon.svg"
import secondProcessIcon from "@/shared/assets/icons/about/svg/2nd-card-icon.svg"
import thirdProcessIcon from "@/shared/assets/icons/about/svg/3th-card-icon.svg"
import fourthProcessIcon from "@/shared/assets/icons/about/svg/4th-card-icon.svg"

export const sectionID = "process"

export const PROCESS_HEADER = Object.freeze({
  title: "Как я работаю",
  subtitle: "От проблемы пользователя до стабильного результата",
})

export const PROCESS_STEPS = Object.freeze([
  Object.freeze({
    n: 1,
    icon: firstProcessIcon,
    title: "Уточняю и убираю неопределенность",
    text: "Быстро выясняю суть проблемы, чтобы не тратить время на догадки и лишние действия.",
  }),
  Object.freeze({
    n: 2,
    icon: secondProcessIcon,
    title: "Нахожу причину",
    text: "Определяю первопричину, чтобы проблема не возвращалась повторно.",
  }),
  Object.freeze({
    n: 3,
    icon: thirdProcessIcon,
    title: "Решаю или передаю с контекстом",
    text: "Либо довожу решение до конца, либо передаю задачу с полной информацией без потерь времени.",
  }),
  Object.freeze({
    n: 4,
    icon: fourthProcessIcon,
    title: "Фиксирую результат",
    text: "Проверяю, что проблема решена, и сохраняю знания для ускорения будущих кейсов.",
  }),
])
