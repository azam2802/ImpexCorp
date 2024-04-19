import React from "react"
import s from "@styles/layout/Footer.module.scss"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import Logo from "@ui/Logo/Logo"
import TelegramIcon from "@images/TelegramIcon.webp"
import InstagramIcon from "@images/InstagramIcon.webp"
import GmailIcon from "@images/GmailIcon.webp"
import WhatsUpIcon from "@images/WhatsUpIcon.webp"

const Footer = () => {
  const { t, i18n } = useTranslation()
  const currentLanguage = i18n.getResourceBundle(i18n.languages[0])

  const renderLinks = (menu, path) =>
    Object.keys(menu).map((key) => (
      <li key={key}>
        {path.startsWith("http") ? (
          <a href={path} target="_blank" rel="noopener noreferrer">
            {menu[key]}
          </a>
        ) : (
          <Link to={path}>{menu[key]}</Link>
        )}
      </li>
    ))

  const footerColumns = [
    {
      title: t("footer.aboutus.name"),
      menu: currentLanguage.footer.aboutus.menu,
      path: "/about",
    },
    {
      title: t("footer.support.name"),
      menu: currentLanguage.footer.support.menu,
      path: "https://api.whatsapp.com/send?phone=996500677633",
    },
    {
      title: t("footer.branches.name"),
      menu: currentLanguage.footer.branches.menu,
      path: "https://2gis.kg/bishkek/geo/15763234351111077?m=74.61276%2C42.870892%2F19.15",
    },
    {
      title: t("footer.contacts.name"),
      menu: currentLanguage.footer.contacts.menu,
      path: "tel:+996500677633",
    },
  ]

  return (
    <footer>
      <div className={s.logo}>
        <Logo />
      </div>

      <div className={s.footer_content}>
        {footerColumns.map((column, index) => (
          <div className={s[`row_${index + 1}`]} key={index}>
            <ul>
              <li>{column.title}</li>
              {renderLinks(column.menu, column.path)}
            </ul>
          </div>
        ))}
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
