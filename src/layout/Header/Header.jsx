import React, { useState } from "react"
import s from "@styles/layout/Header.module.scss"
import Logo from "@images/Logo.svg"
import LangSwitcher from "@ui/LangSwitcher/LangSwitcher"
import PhoneIcon from "@images/phoneIcon.svg"
import BurgerMenuBtn from "@ui/BurgerMenuBtn/BurgerMenuBtn"
import Navbar from "@components/HeaderNavbar/Navbar"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import Catalog from "@components/Catalog/Catalog"

export const Header = () => {
  const { t } = useTranslation()

  const [showCatalog, setShowCatalog] = useState(false)

  const onOpenCatalog = () => {
    setShowCatalog((prev) => !prev)
  }

  return (
    <div>
      <header id="header">
        <nav className={s["pc-nav"]}>
          <div className={s.row}>
            <div className={s["col-4"]}>
              <Link to="/">
                <img src={Logo} alt="Impex Logotype" />
              </Link>
            </div>

            <div className={s["col-4"]}>
              <input type="search" placeholder={t("header.search")} />
            </div>

            <div className={s["col-4"]}>
              <LangSwitcher />
              <img src={PhoneIcon} alt="Phone" />
              <p>+996 (708) 04-02-90</p>
            </div>
          </div>
          <Navbar onOpenCatalog={onOpenCatalog} />
        </nav>
        <BurgerMenuBtn />
      </header>
      {showCatalog && <Catalog setShowCatalog={setShowCatalog} />}
    </div>
  )
}

export default Header
