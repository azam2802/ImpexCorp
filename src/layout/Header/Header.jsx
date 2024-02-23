import React, { useEffect, useState } from "react"
import s from "@styles/layout/Header.module.scss"
import Logo from "@images/Logo.svg"
import Search from "@images/search.svg"
import LangSwitcher from "@ui/LangSwitcher/LangSwitcher"
import BurgerMenuBtn from "@ui/BurgerMenuBtn/BurgerMenuBtn"
import Navbar from "@components/HeaderNavbar/Navbar"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import Catalog from "@components/Catalog/Catalog"

const Header = () => {
  const { t } = useTranslation()

  const [showCatalog, setShowCatalog] = useState(false)
  const [showSearchIco, setShowSearchIco] = useState("")

  const onOpenCatalog = () => {
    setShowCatalog((prev) => !prev)
  }

  const onCloseCatalog = () => {
    setShowCatalog(false)
  }

  useEffect(() => {
    const searchIco = document.querySelector("#search-ico")
    if (showSearchIco != "") {
      searchIco.style.display = "none"
    } else {
      searchIco.style.display = "unset"
    }
  }, [showSearchIco])

  return (
    <div>
      <header id="header">
        <BurgerMenuBtn />
        <nav className={s["pc-nav"]}>
          <div className={s.row}>
            <div className={s["col-4"]}>
              <Link to="/" onClick={onCloseCatalog}>
                <img src={Logo} alt="Impex Logotype" />
              </Link>
            </div>

            <div className={s["col-4"]}>
              <div className={s["Search-div"]}>
                <input
                  type="search"
                  placeholder={t("header.search")}
                  onChange={(e) => {
                    setShowSearchIco(e.target.value)
                  }}
                  onClick={onCloseCatalog}
                />
                <img src={Search} alt="search_icon" id="search-ico" />
              </div>
            </div>

            <div className={s["col-4"]}>
              <p id={s.phone_num}>+996 (708) 04-02-90</p>
              <LangSwitcher onCloseCatalog={onCloseCatalog} />
            </div>
          </div>
          <Navbar
            onOpenCatalog={onOpenCatalog}
            onCloseCatalog={onCloseCatalog}
          />
        </nav>
      </header>
      {showCatalog && <Catalog setShowCatalog={setShowCatalog} />}
    </div>
  )
}

export default Header
