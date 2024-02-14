import React from "react"
import Logo from "@images/Logo.svg" 
import s from '@styles/ui/BurgerMenu.module.scss'

const BurgerMenuBtn = () => {
  return (
    <div>
      <nav className={s["mob-nav"]}>
        <div className="row">
          <div className={s["col-6"]}>
            <img src={Logo} alt="Impex Logotype" width={"70%"} />
          </div>
          <div className={s["col-6"]}>
            <div className={s['burger-btn']}>
                <span></span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default BurgerMenuBtn
