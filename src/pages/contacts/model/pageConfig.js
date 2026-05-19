import {
  mail,
  telegram,
  telegramavatar,
  mailavatar,
} from "@/shared/assets/images"
import {
  mailLink,
  telegrammLink,
} from "@/shared/config/profileLinks"

export const contactsPageCards = [
  {
    img: telegram,
    avatar: telegramavatar,
    name: "hyperMegaUltra<>",
    socialLink: telegrammLink,
    title: "Telegram",
    description: "Мой телеграмм аккаунт",
  },
  {
    img: mail,
    avatar: mailavatar,
    name: "Danil Devyatov",
    title: "Mail.ru",
    socialLink: mailLink,
    description: "Моя почта mail.ru",
  },
]
