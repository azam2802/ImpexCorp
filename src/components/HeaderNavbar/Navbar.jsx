import React from "react"
import PropTypes from "prop-types"
import s from "@styles/components/HeaderNavbar.module.scss"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

const Navbar = ({ onOpenCatalog }) => {
  const { t } = useTranslation()

  return (
    <nav className={s["HeaderNav"]}>
      <div className={s["row"]}>
        <div onClick={() => onOpenCatalog(false)}>
          <Link to="/">{t("header.ourcompany")}</Link>
        </div>
        <div onClick={onOpenCatalog}>
          <Link to="/">{t("header.catalogue")}</Link>
        </div>
        <div onClick={() => onOpenCatalog(false)}>
          <Link to="/">{t("header.services")}</Link>
        </div>
        <div onClick={() => onOpenCatalog(false)}>
          <Link to="/">{t("header.calculator")}</Link>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  onOpenCatalog: PropTypes.func.isRequired,
}

export default Navbar
