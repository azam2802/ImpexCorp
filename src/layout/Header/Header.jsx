import Catalog from "@components/Catalog/Catalog"
import OverNavbar from "@components/OverNavbar/OverNavbar"
// import Logo from "@images/Logo.svg"
import s from "@styles/layout/Header.module.scss"
import BurgerMenuBtn from "@ui/BurgerMenuBtn/BurgerMenuBtn"
import React, { useState } from "react"
// import { useTranslation } from "react-i18next"
// import { CiSearch } from "react-icons/ci"
// import { MdOutlineCancel } from "react-icons/md"
// import { Link } from "react-router-dom"

const Header = () => {
  // const { t } = useTranslation()

  const [showCatalog, setShowCatalog] = useState(false)
  // const [showSearchIco, setShowSearchIco] = useState("")

  // const onOpenCatalog = () => {
  //   setShowCatalog((prev) => !prev)
  // }

  // const onCloseCatalog = () => {
  //   setShowCatalog(false)
  // }

  return (
    <div>
      <header id="header">
        <nav className={s["pc-nav"]}>
          <OverNavbar />
          <div className={s.row}>
            <div className={s["col-6"]}></div>
            <div className={s["col-6"]}></div>
          </div>
        </nav>
        <BurgerMenuBtn />
      </header>
      {showCatalog && <Catalog setShowCatalog={setShowCatalog} />}
    </div>
  )
}

export default Header
