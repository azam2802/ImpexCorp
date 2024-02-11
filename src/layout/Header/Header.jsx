import React from "react"
import s from "@styles/layout/Header.module.scss"
import Logo from "@images/Logo.svg"
import Mark from "@images/mark.svg"
import LangSwitcher from "@ui/LangSwitcher/LangSwitcher"
import PhoneIcon from "@images/phoneIcon.svg"
import BurgerMenuBtn from "@ui/BurgerMenuBtn/BurgerMenuBtn"

export const Header = () => {
  console.log(window.innerWidth)
  return (
    <header>
      {window.innerWidth > "768" ? (
        <nav>
          <div className={s.row}>
            <div className={s["col-4"]}>
              <img src={Logo} alt="Impex Logotype" />
              <img src={Mark} alt="2gis" />
              <a href="#">2гис</a>
            </div>

            <div className={s["col-4"]}>
              <input type="search" placeholder="Поиск" />
            </div>

            <div className={s["col-4"]}>
              <LangSwitcher />
              <img src={PhoneIcon} alt="Phone" />
              <p>+996 0708 04 02 90</p>
            </div>
          </div>
        </nav>
      ) : (
        <BurgerMenuBtn />
      )}
    </header>
  )
}

export default Header
