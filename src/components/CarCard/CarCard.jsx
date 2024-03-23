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
    <li className={s.carCardItem}>
      <img src={carImage} className={s.car_image} alt="" />
      <h1 className={s.car_name}>BYD Tang II</h1>
      <ul className={s.car_struct_list}>
        <li className={s.car_struct_list_item}>
          <FaRegCalendar />
          <p className={s.car_struct_text}>2023</p>
        </li>
        <li className={s.car_struct_list_item}>
          <img className={s.car_struct_image} src={Icon2} alt="" />
          <p className={s.car_struct_text}>Авто</p>
        </li>
        <li className={s.car_struct_list_item}>
          <LuFuel />
          <p className={s.car_struct_text}>Электро</p>
        </li>
        <li className={s.car_struct_list_item}>
          <MdOutlineSpeed />
          <p className={s.car_struct_text}>12.500</p>
        </li>
        <li className={s.car_struct_list_item}>
          <FaFlag />
          <p className={s.car_struct_text}>Китай</p>
        </li>
        <li className={s.car_struct_list_item}>
          <img className={s.car_struct_image} src={Icon1} alt="" />
          <p className={s.car_struct_text}>2.5</p>
        </li>
      </ul>
      <hr />
      <div className={s.car_info}>
        <h1 className={s.car_price}>$ 120000</h1>
        <button className={s.moreButton}>
          {t("HomePage.CatalogBlock.buttonText")}
        </button>
      </div>
    </li>
  )
}
