import React from "react"
import s from "@styles/components/BurgerMenu.module.scss"
import Logo from "@ui/Logo/Logo"
import Menu from "./Menu/Menu"
import { useBurgerState } from "@store/store"

const BurgerMenu = () => {
  const { menuActive, setMenuActive } = useBurgerState()

  return (
    <>
      <nav className={s.mob_nav}>
        <div className={s.row}>
          <div className={s.col_6}>
            <Logo />
          </div>
          <div className={s.col_6}>
            <div
              className={s.burger_btn}
              onClick={() => setMenuActive(!menuActive)}>
              <span></span>
            </div>
          </div>
        </div>
      </nav>
      <Menu active={menuActive} setActive={setMenuActive} />
    </>
  )
}

export default BurgerMenu
