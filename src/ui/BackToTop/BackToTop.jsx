import React from "react"
import upArrow from "@images/upArrow.svg"
import s from "@styles/ui/BackToTop.module.scss"

const BackToTop = () => {
  window.addEventListener("scroll", function () {
    let scroll = document.querySelector("#top-btn")
    scroll.classList.toggle(s["active"], window.scrollY > 200)
  })

  function toTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <div className={s["top-btn"]} id="top-btn" onClick={()=>toTop()}>
      <img src={upArrow} alt="top-btn" />
      <img src={upArrow} alt="top-btn" />
    </div>
  )
}

export default BackToTop
