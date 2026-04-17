import { MENU_ITEMS } from "./routes"

export const menuItems = MENU_ITEMS

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
