import { FooterLogo } from "./FooterLogo"
import { FooterCopyright } from "./FooterCopyright"
import { FooterNav } from "./FooterNav"

export const Footer = () => {
  return (
    <footer>
      <div className="footer__content">
        <FooterLogo />
        <FooterCopyright />
        <FooterNav />
      </div>
    </footer>
  )
}
