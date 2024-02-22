import React, { useState } from "react"
import RussianFlag from "@images/russia.png"
import ChinaFlag from "@images/china.png"
import KyrgyzFlag from "@images/kyrgyzstan.png"
import UKFlag from "@images/united-kingdom.png"
import { useLang } from "@store/store"
import { useTranslation } from "react-i18next"
import "@styles/ui/LangSwitcher.scss"
import chevronDown from "@images/chevron-down.svg"

const LangSwitcher = () => {
  const { changeLang } = useLang()
  const [showDrop, setShowDrop] = useState(false)
  const { i18n } = useTranslation()

  const showDropDown = () => {
    const dropdown = document.querySelector(".dropdown-content")
    const arrow = document.querySelector(".langArrow")
    if (!showDrop) {
      dropdown.style.display = "flex"
      arrow.style.transform = "rotate(180deg)"
      setShowDrop((prev) => !prev)
    } else {
      dropdown.style.display = "none"
      arrow.style.transform = "unset"
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
        <button onClick={() => showDropDown()}>
          <div>
            <img src={RussianFlag} alt="Russia" />
          </div>
          Рус
          <img src={chevronDown} className="langArrow" alt="arrowDown" />
        </button>
      ) : i18n.language == "ky" ? (
        <button onClick={() => showDropDown()}>
          <div>
            <img src={KyrgyzFlag} alt="Kyrgyz" />
          </div>
          Кыр
          <img src={chevronDown} className="langArrow" alt="arrowDown" />
        </button>
      ) : i18n.language == "en" ? (
        <button onClick={() => showDropDown()}>
          <div>
            <img src={UKFlag} alt="English" />
          </div>
          Eng
          <img src={chevronDown} className="langArrow" alt="arrowDown" />
        </button>
      ) : (
        <button onClick={() => showDropDown()}>
          <div>
            <img src={ChinaFlag} alt="Chinese" />
          </div>
          文本
          <img src={chevronDown} className="langArrow" alt="arrowDown" />
        </button>
      )}
      <div className="dropdown-content">
        <button onClick={() => changeLanguage("Ru")}>Рус</button>
        <button onClick={() => changeLanguage("En")}>Eng</button>
        <button onClick={() => changeLanguage("Ky")}>Кыр</button>
        <button onClick={() => changeLanguage("Zh")}>中国人</button>
      </div>
    </div>
  )
}

export default LangSwitcher
