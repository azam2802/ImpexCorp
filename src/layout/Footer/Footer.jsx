import React from "react"
import s from "@styles/layout/Footer.module.scss"
import Logo from "@images/Logo.svg"
import TelegramIcon from "@images/image 4.png"
import InstagramIcon from "@images/image 5.png"
import TwitterIcon from "@images/image 6.png"
import WhatsUpIcon from "@images/image 7.png"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

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
    <div>
      <footer>
        <div className={s["logo"]}>
          <Link to="/">
            <img src={Logo} alt="Impex Logotype" />
          </Link>
        </div>
        <div className={s["footer-content"]}>
          <div className={s["row-1"]}>
            <ul>
              <li>{t("footer.aboutus.name")}</li>
              {renderLinks(currentLanguage.footer.aboutus)}
            </ul>
          </div>
          <div className={s["row-2"]}>
            <ul>
              <li>{t("footer.support.name")}</li>
              {renderLinks(currentLanguage.footer.support)}
            </ul>
          </div>
          <div className={s["row-3"]}>
            <ul>
              <li>{t("footer.branches.name")}</li>
              {renderLinks(currentLanguage.footer.branches)}
            </ul>
          </div>
          <div className={s["row-4"]}>
            <ul>
              <li>{t("footer.contacts.name")}</li>
              {renderLinks(currentLanguage.footer.contacts)}
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
                <img src={TwitterIcon} alt="Twitter Icon" />
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
