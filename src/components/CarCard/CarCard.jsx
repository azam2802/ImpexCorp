import React from "react"
import s from "@styles/components/CarCard.module.scss"
import { useTranslation } from "react-i18next"
import carImage from "@images/carImage.webp"
import Icon1 from "@images/Vector5.svg"
import Icon2 from "@images/Vector4.svg"
import { LuFuel } from "react-icons/lu"
import { FaRegCalendar } from "react-icons/fa"
import { MdOutlineSpeed } from "react-icons/md"
import { FaFlag } from "react-icons/fa6"
export const CarCard = () => {
  const { t } = useTranslation()
  return (
    <li className={s["carCardItem"]}>
      <img src={carImage} className={s["car-image"]} alt="" />
      <h1 className={s["car-name"]}>BYD Tang II</h1>
      <ul className={s["car-struct-list"]}>
        <li className={s["car-struct-list-item"]}>
          <FaRegCalendar />
          <p className={s["car-struct-text"]}>2023</p>
        </li>
        <li className={s["car-struct-list-item"]}>
          <img className={s["car-struct-image"]} src={Icon2} alt="" />
          <p className={s["car-struct-text"]}>Авто</p>
        </li>
        <li className={s["car-struct-list-item"]}>
          <LuFuel />
          <p className={s["car-struct-text"]}>Электро</p>
        </li>
        <li className={s["car-struct-list-item"]}>
          <MdOutlineSpeed />
          <p className={s["car-struct-text"]}>12.500</p>
        </li>
        <li className={s["car-struct-list-item"]}>
          <FaFlag />
          <p className={s["car-struct-text"]}>Китай</p>
        </li>
        <li className={s["car-struct-list-item"]}>
          <img className={s["car-struct-image"]} src={Icon1} alt="" />
          <p className={s["car-struct-text"]}>2.5</p>
        </li>
      </ul>
      <hr />
      <div className={s["car-info"]}>
        <h1 className={s["car-price"]}>$ 120000</h1>
        <button className={s["moreButton"]}>
          {t("HomePage.CatalogBlock.buttonText")}
        </button>
      </div>
    </li>
  )
}
