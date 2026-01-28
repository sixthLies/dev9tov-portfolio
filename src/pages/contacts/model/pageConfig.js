import {
  github,
  gmail,
  hh,
  mail,
  telegram,
  telegramavatar,
  mailavatar,
  githubavatar,
} from "@/shared/assets/images"
import {
  githubLink,
  gmailLink,
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
    img: github,
    avatar: githubavatar,
    name: "SixthLies",
    title: "GitHub",
    socialLink: githubLink,
    description: "Мой профиль на GitHub",
  },
  {
    img: hh,
    avatar: mailavatar,
    // name: "Данил Девятов",
    title: "HH.ru",
    socialLink: "https://hh.ru/profile/me?hhtmFrom=ProfileActivator",
    description: "Мой Профиль на HH.ru",
  },
  {
    img: gmail,
    avatar: githubavatar,
    name: "Danil 6lies",
    title: "Google Mail",
    socialLink: gmailLink,
    description: "Моя Google почта",
  },
  {
    img: mail,
    avatar: mailavatar,
    // name: "Danil Devyatov",
    title: "Mail.ru",
    socialLink: mailLink,
    description: "Моя почта mail.ru",
  },
]
