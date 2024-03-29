import BurgerMenu from "@components/BurgerMenu/BurgerMenu"
import OverNavbar from "@components/OverNavbar/OverNavbar"
import s from "@styles/layout/Header.module.scss"
import Logo from "@ui/Logo/Logo"
import React, { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { IoSearch } from "react-icons/io5"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const Header = ({ openModal }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const { t } = useTranslation()

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth)
    })
    window.addEventListener("scroll", () => {
      const header = document.querySelector(".header")
      if (window.innerWidth > 1024) {
        const headerHeight = header.offsetHeight
        const scrollThreshold = 1.7 * headerHeight
        if (window.scrollY > scrollThreshold) {
          header.classList.add(s.fixed)
        } else {
          header.classList.remove(s.fixed)
        }
      }
    })
  })

  return (
    <>
      {screenWidth > 1024 ? (
        <>
          <OverNavbar />
          <header className="header">
            <nav className={s.pc_nav}>
              <div className={s.row}>
                <div className={s.col_6}>
                  <Logo />
                </div>
                <div className={s.col_6}>
                  <div className={s.searchIco_div}>
                    <IoSearch id="search_ico" alt="search_ico" />
                    <input type="search" placeholder={t("header.search")} />
                  </div>
                  <div className={s.Links}>
                    <Link to="/">{t("header.home")}</Link>
                    <Link to="about">{t("header.ourcompany")}</Link>
                    <Link to="catalog">{t("header.catalogue")}</Link>
                    <button onClick={openModal}>
                      {t("header.calculator")}
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          </header>
        </>
      ) : (
        <BurgerMenu />
      )}
    </>
  )
}

Header.propTypes = {
  openModal: PropTypes.func.isRequired,
}

export default Header
