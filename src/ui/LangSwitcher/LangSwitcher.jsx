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
    const dropdown = document.querySelector(".dropdown_content")
    const arrow = document.querySelector(".langArrow")
    if (!showDrop) {
      dropdown.classList.add("dropdown_content_show")
      arrow.classList.add("langArrow_active")
      setShowDrop((prev) => !prev)
    } else {
      dropdown.classList.remove("dropdown_content_show")
      arrow.classList.remove("langArrow_active")
      setShowDrop((prev) => !prev)
    }
  }

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
    showDropDown()
    changeLang(language)
  }

  const langs = [
    { code: "ru", name: "Русский", flag: RussianFlag },
    { code: "ky", name: "Кыргыз", flag: KyrgyzFlag },
    { code: "en", name: "English", flag: UsaFlag },
    { code: "zh", name: "中国人", flag: ChinaFlag },
  ]

  return (
    <div className="dropDown">
      {langs
        .filter((lang) => lang.code == i18n.language)
        .map((lang, id) => (
          <button key={id} onClick={() => showDropDown()}>
            <div>
              <img src={lang.flag} alt={lang.name} />
            </div>
            {lang.name}
            <FaChevronDown className="langArrow" alt="arrowDown" />
          </button>
        ))}
      <div className="dropdown_content">
        {langs.map((i, id) => (
          <button key={id} onClick={() => changeLanguage(i.code)}>
            <img src={i.flag} alt={i.name} />
            {i.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default LangSwitcher
