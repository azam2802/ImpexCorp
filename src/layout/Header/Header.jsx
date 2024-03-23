import BurgerMenu from "@components/BurgerMenu/BurgerMenu"
import OverNavbar from "@components/OverNavbar/OverNavbar"
import s from "@styles/layout/Header.module.scss"
import Logo from "@ui/Logo/Logo"
import React from "react"
import { useTranslation } from "react-i18next"
import { IoSearch } from "react-icons/io5"
import { Link } from "react-router-dom"

import PropTypes from "prop-types"

const Header = ({ openModal }) => {
  const { t } = useTranslation()

  const addFixedClassToHeader = () => {
    const header = document.querySelector(".header")
    const headerHeight = header.offsetHeight
    const scrollThreshold = 1.7 * headerHeight
    if (window.scrollY > scrollThreshold) {
      header.classList.add(s.fixed)
    } else {
      header.classList.remove(s.fixed)
    }
  }

  window.addEventListener("scroll", addFixedClassToHeader)

  return (
    <>
      <OverNavbar />
      <header className="header">
        <nav className={s["pc-nav"]}>
          <div className={s.row}>
            <div className={s["col-6"]}>
              <Logo />
            </div>
            <div className={s["col-6"]}>
              <div className={s.searchIco_div}>
                <IoSearch id="search_ico" alt="search_ico" />
                <input type="search" placeholder={t("header.search")} />
              </div>
              <div className={s.Links}>
                <Link to="about">{t("header.ourcompany")}</Link>
                <Link to="catalog">{t("header.catalogue")}</Link>
                <Link to="/services">{t("header.services")}</Link>
                <button className={s.calculator} onClick={openModal}>
                  {t("header.calculator")}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <BurgerMenu />
    </>
  )
}

Header.propTypes = {
  openModal: PropTypes.func.isRequired,
}

export default Header
