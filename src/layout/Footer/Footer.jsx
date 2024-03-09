import React from "react"
import s from "@styles/layout/Footer.module.scss"
import TelegramIcon from "@images/TelegramIcon.webp"
import InstagramIcon from "@images/InstagramIcon.webp"
import GmailIcon from "@images/GmailIcon.webp"
import WhatsUpIcon from "@images/WhatsUpIcon.webp"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import Logo from "@ui/Logo/Logo"

const Footer = () => {
  const { i18n } = useTranslation()
  const currentLanguage = i18n.getResourceBundle(i18n.languages[0])

  const renderLinks = (links) => {
    return Object.entries(links).map(([key, value]) => (
      <li key={key}>
        <Link to="/">{value}</Link>
      </li>
    ))
  }

  return (
    <div>
      <footer>
        <div className={s["logo"]}>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className={s["footer-content"]}>
          <div className={s["row-1"]}>
            <ul>
              <li>{renderLinks(currentLanguage.footer.aboutus)}</li>
            </ul>
          </div>
          <div className={s["row-2"]}>
            <ul>
              <li> {renderLinks(currentLanguage.footer.support)}</li>
            </ul>
          </div>
          <div className={s["row-3"]}>
            <ul>
              <li>{renderLinks(currentLanguage.footer.branches)}</li>
            </ul>
          </div>
          <div className={s["row-4"]}>
            <ul>
              <li>{renderLinks(currentLanguage.footer.contacts)}</li>
            </ul>
          </div>
        </div>
        <div className={s["social-media"]}>
          <ul>
            <li>
              <Link to="#">
                <img src={TelegramIcon} alt="Telegram Icon" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src={InstagramIcon} alt="Instagram Icon" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src={GmailIcon} alt="Gmail Icon" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src={WhatsUpIcon} alt="WhatsApp Icon" />
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer
