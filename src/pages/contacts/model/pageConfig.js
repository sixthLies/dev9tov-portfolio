import {
  gmail,
  hh,
  mail,
  telegram,
  telegramavatar,
  mailavatar,
  githubavatar,
  hhAvatar,
} from "@/shared/assets/images"
import {
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
    img: hh,
    avatar: hhAvatar,
    name: "Данил Девятов",
    title: "HH.ru",
    socialLink: "https://hh.ru/resume/a039fdbfff1047d88d0039ed1f4b4474636e4d",
    description: "Моё резюме на HH.ru",
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
    name: "Danil Devyatov",
    title: "Mail.ru",
    socialLink: mailLink,
    description: "Моя почта mail.ru",
  },
]
