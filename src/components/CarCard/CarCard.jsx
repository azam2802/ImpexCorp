import React from "react"
import s from "@styles/components/CarCard.module.scss"
import { useTranslation } from "react-i18next"
import carImage from "@images/carImage.webp"
import Icon from "@images/Union.svg"
import Icon2 from "@images/Vector (1).svg"
import Icon3 from "@images/Vector.svg"

export const CarCard = () => {
  const { t } = useTranslation()
  return (
    <li className={s["carCardItem"]}>
      <button className={s["compactButton"]}>{t("Compact")}</button>
      <img src={carImage} className={s["car-image"]} alt="" />
      <h1 className={s["car-name"]}>{t("BYD Tang II")}</h1>
      <ul className={s["car-struct-list"]}>
        <li className={s["car-struct-list-item"]}>
          <img className={s["car-struct-image"]} src={Icon} alt="" />
          <p className={s["car-struct-text"]}> {t("25 000 km")}</p>
        </li>
        <li className={s["car-struct-list-item"]}>
          <img className={s["car-struct-image"]} src={Icon2} alt="" />
          <p className={s["car-struct-text"]}> {t("Auto")}</p>
        </li>
        <li className={s["car-struct-list-item"]}>
          <img className={s["car-struct-image"]} src={Icon3} alt="" />
          <p className={s["car-struct-text"]}>{t("4")}</p>
        </li>
      </ul>
      <hr />
      <div className={s["car-info"]}>
        <h1 className={s["car-price"]}>$ 120000</h1>
        <button className={s["moreButton"]}>{t("Подробнее")}</button>
      </div>
    </li>
  )
}
