import React from "react"
import s from "@styles/components/HeaderNavbar.module.scss"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

const Navbar = () => {
  const { t } = useTranslation()

  return (
    <nav className={s["HeaderNav"]}>
      <div className={s["row"]}>
        <div>
          <Link to="/">{t("header.catalogue")}</Link>
        </div>
        <div>
          <Link to="/">{t("header.services")}</Link>
        </div>
        <div>
          <Link to="/">{t("header.calculator")}</Link>
        </div>
        <div>
          <Link to="/">{t("header.ourcompany")}</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
