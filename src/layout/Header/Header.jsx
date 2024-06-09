import BurgerMenu from "@components/BurgerMenu/BurgerMenu"
import OverNavbar from "@components/OverNavbar/OverNavbar"
import s from "@styles/layout/Header.module.scss"
import Logo from "@ui/Logo/Logo"
import React, { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import { Link, useLocation } from "react-router-dom"
import { Helmet } from "react-helmet"

const Header = () => {
  const [screenWidth, setScreenWidth] = useState(
    window.matchMedia("(min-width: 768px)").matches,
  )
  const { t } = useTranslation()
  const location = useLocation()
  const ref = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.matchMedia("(min-width: 768px)").matches)
    }

    const handleScroll = () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        const headerHeight = ref.current.offsetHeight
        const scrollThreshold = 1.7 * headerHeight
        if (window.scrollY > scrollThreshold) {
          ref.current.classList.add(s.fixed)
        } else {
          ref.current.classList.remove(s.fixed)
        }
      }
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const getMetaTags = () => {
    switch (location.pathname) {
      case "/about":
        return {
          title: t("header.MetaTags.ourcompany"),
          description: t("header.MetaTags.description"),
        }
      case "/catalog":
        return {
          title: t("header.MetaTags.catalogue"),
          description: t("header.MetaTags.description"),
        }
      default:
        return {
          title: t("header.MetaTags.home"),
          description: t("header.MetaTags.description"),
        }
    }
  }

  const metaTags = getMetaTags()

  return (
    <>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
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
                    <Link to="/">{t("header.home")}</Link>
                    <Link to="about">{t("header.ourcompany")}</Link>
                    <Link to="catalog">{t("header.catalogue")}</Link>
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

export default Header
