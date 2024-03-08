import BurgerMenu from "@components/BurgerMenu/BurgerMenu"
import Catalog from "@components/Catalog/Catalog"
import OverNavbar from "@components/OverNavbar/OverNavbar"
import s from "@styles/layout/Header.module.scss"
import Logo from "@ui/Logo/Logo"
import React, { useState } from "react"
// import { useTranslation } from "react-i18next"
import { IoSearch } from "react-icons/io5"
// import { Link } from "react-router-dom"

const Header = () => {
  // const { t } = useTranslation()

  const [showCatalog, setShowCatalog] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  // const [showSearchIco, setShowSearchIco] = useState("")

  const handleShowSearch = () => {
    let search_ico = document.querySelector("#search_ico")
    search_ico.classList.toggle(s.showSearch)
    setShowSearch((prev) => !prev)
    console.log(showSearch)
  }

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
              <div className={s.search_div}>
                <button
                  onClick={() => {
                    onCloseCatalog, handleShowSearch
                  }}>
                  <IoSearch id="search_ico" />
                </button>
              </div>
            </div>
            <div className={s["col-6"]}></div>
          </div>
        </nav>
      </header>
      <BurgerMenu />
      {showCatalog && <Catalog setShowCatalog={setShowCatalog} />}
    </div>
  )
}

export default Header
