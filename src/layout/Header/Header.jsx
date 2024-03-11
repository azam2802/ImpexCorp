import BurgerMenu from "@components/BurgerMenu/BurgerMenu"
import Catalog from "@components/Catalog/Catalog"
import OverNavbar from "@components/OverNavbar/OverNavbar"
import s from "@styles/layout/Header.module.scss"
import Logo from "@ui/Logo/Logo"
import React, { useState } from "react"
// import { useTranslation } from "react-i18next"
import { IoSearch } from "react-icons/io5"
import { Link } from "react-router-dom"
// import { Link } from "react-router-dom"

const Header = () => {
  // const { t } = useTranslation()

  const [showCatalog, setShowCatalog] = useState(false)
  // const [showSearchIco, setShowSearchIco] = useState("")

  // const onOpenCatalog = () => {
  //   setShowCatalog((prev) => !prev)
  // }

  const onCloseCatalog = () => {
    setShowCatalog(false)
    console.log("click")
  }

  return (
    <div>
      <header className={s["pc-nav"]} id="header">
        <OverNavbar />
        <nav className={s["pc-nav"]}>
          <div className={s.row}>
            <div className={s["col-6"]}>
              <Logo onClick={onCloseCatalog} />
            </div>
            <div className={s["col-6"]}>
              <div className={s.searchIco_div}>
                <IoSearch
                  onClick={() => {
                    onCloseCatalog()
                  }}
                  id="search_ico"
                  alt="search_ico"
                />
                <input type="search" placeholder="Поиск" />
              </div>
              <div className={s.Links}>
                <Link to="about">Наша компания</Link>
                <Link to="catalog">Каталог</Link>
                <Link to="/">Калькулятор</Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <BurgerMenu />
      {showCatalog && <Catalog setShowCatalog={setShowCatalog} />}
    </div>
  )
}

export default Header
