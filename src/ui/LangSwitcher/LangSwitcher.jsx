import React, { useState } from "react"
import RussianFlag from "@images/russia.svg"
import ChinaFlag from "@images/china.svg"
import KyrgyzFlag from "@images/kyrgyzstan.svg"
import UsaFlag from "@images/usa.svg"
import { useLang } from "@store/store"
import { useTranslation } from "react-i18next"
import "@styles/ui/LangSwitcher.scss"
import { FaChevronDown } from "react-icons/fa6"

const LangSwitcher = () => {
  const { changeLang } = useLang()
  const [showDrop, setShowDrop] = useState(false)
  const { i18n } = useTranslation()

  const showDropDown = () => {
    const dropdown = document.querySelector(".dropdown-content")
    const arrow = document.querySelector(".langArrow")
    if (!showDrop) {
      dropdown.classList.add("dropdown-content-show")
      arrow.classList.add("langArrow-active")
      setShowDrop((prev) => !prev)
    } else {
      dropdown.classList.remove("dropdown-content-show")
      arrow.classList.remove("langArrow-active")
      setShowDrop((prev) => !prev)
    }
  }

  const changeLanguage = (language) => {
    i18n.changeLanguage(language.toLowerCase())
    showDropDown()
    changeLang(language.toLowerCase())
  }

  return (
    <div className="dropDown">
      {i18n.language == "ru" ? (
        <button
          onClick={() => {
            showDropDown()
          }}>
          <div>
            <img src={RussianFlag} alt="Russia" />
          </div>
          Русский
          <FaChevronDown className="langArrow" alt="arrowDown" />
        </button>
      ) : i18n.language == "ky" ? (
        <button
          onClick={() => {
            showDropDown()
          }}>
          <div>
            <img src={KyrgyzFlag} alt="Kyrgyz" />
          </div>
          Кыргыз
          <FaChevronDown className="langArrow" alt="arrowDown" />
        </button>
      ) : i18n.language == "en" ? (
        <button
          onClick={() => {
            showDropDown()
          }}>
          <div>
            <img src={UsaFlag} alt="English" />
          </div>
          English
          <FaChevronDown className="langArrow" alt="arrowDown" />
        </button>
      ) : (
        <button
          onClick={() => {
            showDropDown()
          }}>
          <div>
            <img src={ChinaFlag} alt="Chinese" />
          </div>
          中国人
          <FaChevronDown className="langArrow" alt="arrowDown" />
        </button>
      )}
      <div className="dropdown-content">
        <button onClick={() => changeLanguage("Ru")}>
          <img src={RussianFlag} alt="Russia" />
          Русский
        </button>
        <button onClick={() => changeLanguage("En")}>
          <img src={UsaFlag} alt="Russia" />
          English
        </button>
        <button onClick={() => changeLanguage("Ky")}>
          <img src={KyrgyzFlag} alt="Russia" />
          Кыргыз
        </button>
        <button onClick={() => changeLanguage("Zh")}>
          <img src={ChinaFlag} alt="Russia" />
          中国人
        </button>
      </div>
    </div>
  )
}

export default LangSwitcher
