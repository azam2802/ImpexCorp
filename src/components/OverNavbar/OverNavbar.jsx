import s from "@styles/components/OverNavbar.module.scss"
import LangSwitcher from "@ui/LangSwitcher/LangSwitcher"

import React from "react"

const OverNavbar = () => {
  return (
    <div className={s.OverNavbar} id="OverNavbar">
      <p>+996 702 895 045</p>
      <LangSwitcher />
    </div>
  )
}

export default OverNavbar
