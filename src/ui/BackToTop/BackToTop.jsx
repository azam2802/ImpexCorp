import React from "react"
import { PiCaretDoubleUpThin } from "react-icons/pi"
import s from "@styles/ui/BackToTop.module.scss"

const BackToTop = () => {
  window.addEventListener("scroll", () => {
    let scroll = document.querySelector("#top-btn")
    scroll.classList.toggle(s.active, window.scrollY > 800)
  })

  const toTop = () => {
    var currentPosition = window.scrollY
    if (currentPosition > 0) {
      window.requestAnimationFrame(toTop)
      window.scrollTo(0, currentPosition - currentPosition / 13)
    }
  }

  return (
    <div className={s["top-btn"]} id="top-btn" onClick={toTop}>
      <PiCaretDoubleUpThin alt="top-btn" />
    </div>
  )
}

export default BackToTop
