import React from "react"
import s from "@styles/components/BurgerMenu.module.scss"
import Logo from "@ui/Logo/Logo"

const BurgerMenu = () => {
  document.onscroll = () => {
    let header = document.querySelector("#mob-nav"),
      headerH = document.querySelector("#mob-nav").clientHeight
    let scroll = window.scrollY
    console.log(scroll)
    if (scroll > headerH) {
      header.classList.add(s.fixed)
    } else {
      header.classList.remove(s.fixed)
    }
  }

  return (
    <nav className={s["mob-nav"]} id="mob-nav">
      <div className={s.row}>
        <div className={s["col-6"]}>
          <Logo />
        </div>
        <div className={s["col-6"]}>
          <div className={s["burger-btn"]}>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default BurgerMenu
