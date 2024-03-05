import React from "react"
import { PiCaretDoubleUpThin } from "react-icons/pi"
import s from "@styles/ui/BackToTop.module.scss"

const BackToTop = () => {
  window.addEventListener("scroll", () => {
    let scroll = document.querySelector("#top-btn")
    scroll.classList.toggle(s.active, window.scrollY > 200)
  })

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className={s["top-btn"]} id="top-btn" onClick={toTop}>
      <PiCaretDoubleUpThin alt="top-btn" />
    </div>
  )
}

export default BackToTop
