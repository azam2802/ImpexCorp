import React, { useEffect } from "react"
import s from "@styles/layout/Footer.module.scss"
import { Link, useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next"
import Logo from "@ui/Logo/Logo"
import TelegramIcon from "@images/TelegramIcon.webp"
import InstagramIcon from "@images/InstagramIcon.webp"
import GmailIcon from "@images/GmailIcon.webp"
import WhatsUpIcon from "@images/WhatsUpIcon.webp"
import geeks from "@images/geeks.svg"
import PropTypes from "prop-types"

const Footer = ({ contacts }) => {
  const { t, i18n } = useTranslation()
  const currentLanguage = i18n.getResourceBundle(i18n.languages[0])

  const location = useLocation()

  useEffect(() => {
    if (location.pathname === "/about" && location.hash === "#Services") {
      const servicesElement = document.getElementById("Services")
      if (servicesElement) {
        servicesElement.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [location])

  const renderLinks = (menu, paths) =>
    Object.keys(menu).map((key, index) => (
      <li key={key}>
        {paths[index].startsWith("http") ? (
          <a href={paths[index]} target="_blank" rel="noopener noreferrer">
            {menu[key]}
          </a>
        ) : (
          <Link to={paths[index]}>{menu[key]}</Link>
        )}
      </li>
    ))

  const footerColumns = [
    {
      title: t("footer.aboutus.name"),
      menu: currentLanguage.footer.aboutus.menu,
      path: ["/about", "/about#Services"],
    },
    {
      title: t("footer.support.name"),
      menu: currentLanguage.footer.support.menu,
      path: [`https://api.whatsapp.com/send?phone=${contacts.whatsapp_number}`],
    },
    {
      title: t("footer.branches.name"),
      menu: [contacts && contacts.address],
      path: [`${contacts && contacts.urls_address}`],
    },
    {
      title: t("footer.contacts.name"),
      menu: currentLanguage.footer.contacts.menu,
      path: [`tel: ${contacts.call_number}`],
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
            <a
              href={contacts && "https://t.me/" + contacts.telegram_username}
              target="_blank"
              rel="noopener noreferrer">
              <img src={TelegramIcon} alt="Telegram Icon" />
            </a>
          </li>
          <li>
            <a
              href={
                contacts &&
                "https://www.instagram.com/" + contacts.instagram_username
              }
              target="_blank"
              rel="noopener noreferrer">
              <img src={InstagramIcon} alt="Instagram Icon" />
            </a>
          </li>
          <li>
            <a
              href={"mailto:" + contacts.mail}
              target="_blank"
              rel="noopener noreferrer">
              <img src={GmailIcon} alt="Gmail Icon" />
            </a>
          </li>
          <li>
            <a
              href={
                contacts &&
                "https://api.whatsapp.com/send?phone=" +
                  contacts.whatsapp_number
              }
              target="_blank"
              rel="noopener noreferrer">
              <img src={WhatsUpIcon} alt="WhatsApp Icon" />
            </a>
          </li>
        </ul>
      </div>

      <p id={s.madeby}>
        Made by{" "}
        <a
          href="https://geeks.kg/geeks-pro"
          target="_blank"
          rel="noopener noreferrer">
          Geeks Pro
        </a>{" "}
        <img src={geeks} className={s.geeks_logo} alt="geeks logotype" />
      </p>
    </footer>
  )
}

Footer.propTypes = {
  contacts: PropTypes.any.isRequired,
}

export default Footer
