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
  const { t } = useTranslation()

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
              <li>
                <Link to="/">{t("footer.aboutus.contacts")}</Link>
              </li>
              <li>
                <Link to="/">{t("footer.aboutus.locations")}</Link>
              </li>
              <li>
                <Link to="/">{t("footer.aboutus.review")}</Link>
              </li>
              <li>
                <Link to="/">{t("footer.aboutus.promotion")}</Link>
              </li>
            </ul>
          </div>
          <div className={s["row-2"]}>
            <ul>
              <li>{t("footer.support.name")}</li>
              <li>
                <Link to="/">{t("footer.support.feedback")}</Link>
              </li>
              <li>
                <Link to="/">{t("footer.support.delivery")}</Link>
              </li>
              <li>
                <Link to="/">{t("footer.support.refund")}</Link>
              </li>
              <li>
                <Link to="/">{t("footer.support.howtoorder")}</Link>
              </li>
            </ul>
          </div>
          <div className={s["row-3"]}>
            <ul>
              <li>{t("footer.selection.name")}</li>
              <li>
                <Link to="/">{t("footer.selection.lineup")}</Link>
              </li>
              <li>
                <Link to="/">{t("footer.selection.services")}</Link>
              </li>
              <li>
                <Link to="/">{t("footer.selection.testdrive")}</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={s["social-media"]}>
          <ul>
            <li>
              <a href="#">
                <img src={TelegramIcon} alt="Telegram Icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={InstagramIcon} alt="Instagram Icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={TwitterIcon} alt="Twitter Icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={WhatsUpIcon} alt="WhatsApp Icon" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer
