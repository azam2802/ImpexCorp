import React from "react"
import s from "@styles/layout/Footer.module.scss"
import TelegramIcon from "@images/TelegramIcon.webp"
import InstagramIcon from "@images/InstagramIcon.webp"
import GmailIcon from "@images/GmailIcon.webp"
import WhatsUpIcon from "@images/WhatsUpIcon.webp"
import FaceBookIcon from "@images/FacebookIcon.webp"
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
        <div className={s["row_2"]}>
          <ul>
            <li>{t("footer.support.name")}</li>

            {renderLinks(currentLanguage.footer.support.menu)}
          </ul>
        </div>
        <div className={s["row_3"]}>
          <ul>
            <li>{t("footer.branches.name")}</li>
            {renderLinks(currentLanguage.footer.branches.menu)}
          </ul>
        </div>
        <div className={s["row_4"]}>
          <ul>
            <li>{t("footer.contacts.name")}</li>
            {renderLinks(currentLanguage.footer.contacts.menu)}
          </ul>
        </div>
      </div>
      <div className={s.social_media}>
        <ul>
          <li>
            <Link to="#">
              <img src={FaceBookIcon} alt="Facebook Icon" />
            </Link>
          </li>
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
      <hr />
      <p id={s.madeby}>
        Made by <span>GeeksPRO</span>
      </p>
    </footer>
  )
}

export default Footer
