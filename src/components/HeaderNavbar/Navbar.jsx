import React from "react"
import s from "@styles/components/HeaderNavbar.module.scss"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className={s["HeaderNav"]}>
      <div className={s["row"]}>
        <div>
          <Link to='/'>Каталог</Link>
        </div>
        <div>
          <Link to='/'>Услуги</Link>
        </div>
        <div>
          <Link to='/'>Онлайн калькулятор</Link>
        </div>
        <div>
          <Link to='/'>Наша компания</Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
