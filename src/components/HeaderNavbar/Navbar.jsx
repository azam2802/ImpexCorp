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
          <Link to='/'>Электромобили</Link>
        </div>
        <div>
          <Link to='/'>Авто с Китая</Link>
        </div>
        <div>
          <Link to='/'>Авто с Кореи</Link>
        </div>
        <div>
          <Link to='/'>О нас</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
