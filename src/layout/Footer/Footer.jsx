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
  const { t, i18n } = useTranslation()
  const currentLanguage = i18n.getResourceBundle(i18n.languages[0])

  const renderLinks = (links) => {
    return Object.entries(links).map(([key, value]) => (
      <li key={key}>
        <Link to="/">{value}</Link>
      </li>
    ))
  }

  return (
    <footer>
      <div className={s.logo}>
        <Logo />
      </div>

      <div className={s.footer_content}>
        <div className={s.row_1}>
          <ul>
            <li>{t("footer.aboutus.name")}</li>
            {renderLinks(currentLanguage.footer.aboutus.menu)}
          </ul>
        </div>
        <div className={s.row_2}>
          <ul>
            <li>{t("footer.support.name")}</li>
            {renderLinks(currentLanguage.footer.support.menu)}
          </ul>
        </div>
        <div className={s.row_3}>
          <ul>
            <li>{t("footer.branches.name")}</li>
            {renderLinks(currentLanguage.footer.branches.menu)}
          </ul>
        </div>
        <div className={s.row_4}>
          <ul>
            <li>{t("footer.contacts.name")}</li>
            {renderLinks(currentLanguage.footer.contacts.menu)}
          </ul>
        </div>
      </div>
      <div className={s.social_media}>
        <ul>
          <li>
            <Link to="https://t.me/impexcorpkg" target="_blank">
              <img src={TelegramIcon} alt="Telegram Icon" />
            </Link>
          </li>
          <li>
            <Link to="https://www.instagram.com/impex.corp.kg" target="_blank">
              <img src={InstagramIcon} alt="Instagram Icon" />
            </Link>
          </li>
          <li>
            <Link to="mailto:impexcorpkg@gmail.com" target="_blank">
              <img src={GmailIcon} alt="Gmail Icon" />
            </Link>
          </li>
          <li>
            <Link
              to="https://api.whatsapp.com/send?phone=996500677633"
              target="_blank">
              <img src={WhatsUpIcon} alt="WhatsApp Icon" />
            </Link>
          </li>
        </ul>
      </div>
      <hr />
      <p id={s.madeby}>
        Made by{" "}
        <Link to="https://geeks.kg/geeks-pro" target="_blank">
          GeeksPRO
        </Link>
      </p>
    </footer>
  )
}

export default Footer
