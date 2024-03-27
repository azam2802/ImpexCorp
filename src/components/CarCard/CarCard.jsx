import React from "react"
import s from "@styles/components/CarCard.module.scss"
import { useTranslation } from "react-i18next"
import Icon1 from "@images/Vector5.svg"
import Icon2 from "@images/Vector4.svg"
import { LuFuel } from "react-icons/lu"
import { FaRegCalendar } from "react-icons/fa"
import { MdOutlineSpeed } from "react-icons/md"
import { FaFlag } from "react-icons/fa6"
import PropTypes from "prop-types"

const CarCard = ({ car_name, images, price, mileage, width }) => {
  const { t } = useTranslation()
  return (
    <li className={s.carCardItem} style={{ width: width }}>
      <img src={images} className={s.car_image} alt={car_name} />
      <h1 className={s.car_name}>{car_name}</h1>
      <ul className={s.car_struct_list}>
        <li className={s.car_struct_list_item}>
          <FaRegCalendar />
          <p className={s.car_struct_text}>2023</p>
        </li>
        <li className={s.car_struct_list_item}>
          <img className={s.car_struct_image} src={Icon2} alt="struct-img" />
          <p className={s.text_transmission + " " + s.car_struct_text}>Авто</p>
        </li>
        <li className={s.car_struct_list_item}>
          <LuFuel />
          <p className={s.car_struct_text}>Электро</p>
        </li>
        <li className={s.car_struct_list_item}>
          <MdOutlineSpeed />
          <p className={s.car_struct_text}>{mileage}</p>
        </li>
        <li className={s.car_struct_list_item}>
          <FaFlag />
          <p className={s.car_struct_text}>Китай</p>
        </li>
        <li className={s.car_struct_list_item}>
          <img className={s.car_struct_image} src={Icon1} alt="struct-img" />
          <p className={s.car_struct_text}>2.5</p>
        </li>
      </ul>
      <hr />
      <div className={s.car_info}>
        <h1 className={s.car_price}>${price}</h1>
        <button className={s.moreButton}>
          {t("HomePage.CatalogBlock.buttonText")}
        </button>
      </div>
    </li>
  )
}

CarCard.propTypes = {
  car_name: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  mileage: PropTypes.number.isRequired,
  img_alt: PropTypes.string.isRequired,
  width: PropTypes.string,
}

export default CarCard
