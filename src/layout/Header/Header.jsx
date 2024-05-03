import BurgerMenu from "@components/BurgerMenu/BurgerMenu"
import OverNavbar from "@components/OverNavbar/OverNavbar"
import s from "@styles/layout/Header.module.scss"
import Logo from "@ui/Logo/Logo"
import React, { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

const Header = ({ openModal }) => {
  const [screenWidth, setScreenWidth] = useState(
    window.matchMedia("(min-width: 1024px)").matches,
  )
  const [title, setTitle] = useState()
  const [description, setDescription] = useState("")
  const { t } = useTranslation()

  const ref = useRef(null)

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.matchMedia("(min-width: 1024px)").matches)
    })
    window.addEventListener("scroll", () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        const headerHeight = ref.current.offsetHeight
        const scrollThreshold = 1.7 * headerHeight
        if (window.scrollY > scrollThreshold) {
          ref.current.classList.add(s.fixed)
        } else {
          ref.current.classList.remove(s.fixed)
        }
      }
    })
  }, [])

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      {screenWidth ? (
        <>
          <OverNavbar />
          <header className="header" ref={ref}>
            <nav className={s.pc_nav}>
              <div className={s.row}>
                <div className={s.col_6}>
                  <Logo />
                </div>
                <div className={s.col_6}>
                  <div className={s.Links}>
                    <Link
                      to="/"
                      onClick={() => {
                        setTitle(t("header.MetaTags.home"))
                        setDescription("Описание главной страницы")
                      }}>
                      {t("header.home")}
                    </Link>
                    <Link
                      to="/about"
                      onClick={() => {
                        setTitle(t("header.MetaTags.ourcompany"))
                        setDescription("Описание страницы о нашей компании")
                      }}>
                      {t("header.ourcompany")}
                    </Link>
                    <Link
                      to="/catalog"
                      onClick={() => {
                        setTitle(t("header.MetaTags.catalogue"))
                        setDescription("Описание страницы с каталогом")
                      }}>
                      {t("header.catalogue")}
                    </Link>
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
