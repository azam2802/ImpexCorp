import React from "react"
import s from "@styles/components/CarCard.module.scss"
import { useTranslation } from "react-i18next"
import Icon1 from "@images/Vector5.svg"
import Icon2 from "@images/Vector4.svg"
import { FaRegCalendar } from "react-icons/fa"
import { MdOutlineSpeed } from "react-icons/md"
import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"

const CarCard = ({
  car_name,
  car_slug,
  images,
  price,
  mileage,
  volume,
  transmission,
  width,
  year,
}) => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <li className={s.carCardItem} style={{ width: width }}>
      <img src={images} className={s.car_image} alt={car_name} />
      <h1 className={s.car_name}>{car_name}</h1>
      <ul className={s.car_struct_list}>
        <li className={s.car_struct_list_item}>
          <FaRegCalendar />
          <p className={s.car_struct_text}>{year}</p>
        </li>
        <li className={s.car_struct_list_item}>
          <img className={s.car_struct_image} src={Icon2} alt="struct-img" />
          <p className={s.text_transmission + " " + s.car_struct_text}>
            {transmission}
          </p>
        </li>
        <li className={s.car_struct_list_item}>
          <MdOutlineSpeed />
          <p className={s.car_struct_text}>{mileage} km</p>
        </li>
        <li className={s.car_struct_list_item}>
          <img className={s.car_struct_image} src={Icon1} alt="struct-img" />
          <p className={s.car_struct_text}>{volume}</p>
        </li>
      </ul>
      <hr />
      <div className={s.car_info}>
        <h1 className={s.car_price}>$ {price}</h1>
        <button
          onClick={() => {
            navigate(`/cardinfo/${car_slug}`)
          }}
          className={s.moreButton}>
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
  volume: PropTypes.number.isRequired,
  transmission: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  car_slug: PropTypes.string.isRequired,
  width: PropTypes.string,
}

export default CarCard
