import Catalog from "@components/Catalog/Catalog"
import Navbar from "@components/HeaderNavbar/Navbar"
import Logo from "@images/Logo.svg"
import s from "@styles/layout/Header.module.scss"
import BurgerMenuBtn from "@ui/BurgerMenuBtn/BurgerMenuBtn"
import LangSwitcher from "@ui/LangSwitcher/LangSwitcher"
import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { CiSearch } from "react-icons/ci"
import { MdOutlineCancel } from "react-icons/md"
import { Link } from "react-router-dom"

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
                  value={showSearchIco}
                  onChange={(e) => {
                    setShowSearchIco(e.target.value)
                  }}
                  onClick={onCloseCatalog}
                />
                {showSearchIco.trim() == "" ? (
                  <CiSearch alt="search_icon" />
                ) : (
                  <MdOutlineCancel
                    alt="search_icon"
                    strokeOpacity="0"
                    onClick={() => setShowSearchIco("")}
                  />
                )}
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
