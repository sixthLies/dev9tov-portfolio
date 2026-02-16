export const menuItems = [
  { href: "/about", label: "Обо мне" },
  { href: "/skills", label: "Мой Стек" },
  { href: "/projects", label: "Мои проекты" },
  { href: "/contacts", label: "Мои контакты" },
]

export const socialItems = (links, icons) => [
  {
    href: links.telegrammLink,
    img: icons.telegram,
    alt: "telegramm",
    target: "_blank",
  },
  {
    href: links.githubLink,
    img: icons.github,
    alt: "github",
    target: "_blank",
  },
  {
    href: `mailto:${links.gmailLink}`,
    img: icons.gmail,
    alt: "gmail",
  },
]
