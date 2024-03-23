import React from "react"
import s from "@styles/components/BurgerMenu.module.scss"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import PropTypes from "prop-types"
import LangSwitcher from "@ui/LangSwitcher/LangSwitcher"

const Menu = ({ active, setActive }) => {
  const { t } = useTranslation()
  return (
    <div className={s.menu}>
      <div
        onClick={() => setActive()}
        className={active ? `${s.blur} ${s.active}` : s.blur}></div>
      <div
        className={active ? `${s.menu_content} ${s.active}` : s.menu_content}>
        <ul>
          <li>
            <Link onClick={() => setActive()} to="/">
              {t("header.home")}
            </Link>
          </li>
          <li>
            <Link onClick={() => setActive()} to="about">
              {t("header.ourcompany")}
            </Link>
          </li>
          <li>
            <Link onClick={() => setActive()} to="catalog">
              {t("header.catalogue")}
            </Link>
          </li>
          <li>
            <Link onClick={() => setActive()} to="services">
              {t("header.services")}
            </Link>
          </li>
          <li>
            <LangSwitcher />
          </li>
        </ul>
      </div>
    </div>
  )
}

Menu.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
}

export default Menu
