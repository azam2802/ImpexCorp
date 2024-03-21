import React from "react"
import s from "@styles/components/BurgerMenu.module.scss"
import Logo from "@ui/Logo/Logo"

const BurgerMenu = () => {
  return (
    <nav className={s.mob_nav}>
      <div className={s.row}>
        <div className={s.col_6}>
          <Logo />
        </div>
        <div className={s.col_6}>
          <div className={s.burger_btn}>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default BurgerMenu
