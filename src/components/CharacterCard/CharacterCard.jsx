import React from "react"
import PropTypes from "prop-types"
import s from "@styles/pages/CardInfo/CardInfo.module.scss"
import { useTranslation } from "react-i18next"
const CharacterCard = ({ data }) => {
  const { t } = useTranslation()
  console.log(data)
  const titles = ["CarInfo.titles.common.", "CarInfo.titles.engine."]

  return (
    <>
      {titles.map((item, i) => (
        <div className={s.card} key={i}>
          <h1 className={s.card_title}>{t(item + "title")}</h1>
          <ul className={s.card_info_list}>
            <li>
              <div className={s.keys_list}>
                {item == titles[0] ? (
                  <div>
                    <div>{t(item + "car_type")}</div>
                    <div>{t(item + "number_doors")}</div>
                    <div>{t(item + "number_seats")}</div>
                    <div>{t(item + "mileage")}</div>
                    <div>{t(item + "period")}</div>
                    <div>{t(item + "transmission")}</div>
                    <div>{t(item + "drive")}</div>
                    <div>{t(item + "trunk")}</div>
                  </div>
                ) : (
                  <div>
                    <div key={i}>{t(item + "eng_type")}</div>
                    <div key={i}>{t(item + "power")}</div>
                    <div key={i}>{t(item + "volume")}</div>
                    <div key={i}>{t(item + "consumption")}</div>
                  </div>
                )}
              </div>
              <div className={s.values_list}>
                {item == titles[0] ? (
                  <>
                    <div>{data.body_type}</div>
                    <div>{data.number_of_doors}</div>
                    <div>{data.number_of_seats}</div>
                    <div>{data.mileage}</div>
                    <div>{data.release_period}</div>
                    <div>{data.transmission}</div>
                    <div>{data.drive}</div>
                    <div>{data.trunk_volume}</div>
                  </>
                ) : (
                  <>
                    <div>{data.fuel_type}</div>
                    <div>{data.power}</div>
                    <div>{data.volume}</div>
                    <div>{data.consumption}</div>
                  </>
                )}
              </div>
            </li>
          </ul>
        </div>
      ))}
    </>
  )
}

export default CharacterCard

CharacterCard.propTypes = {
  data: PropTypes.object.isRequired,
}
