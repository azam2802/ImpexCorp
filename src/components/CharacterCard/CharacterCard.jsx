import React from "react"
import PropTypes from "prop-types"
import s from "@styles/pages/CardInfo/CardInfo.module.scss"
const CharacterCard = ({ item }) => {
  console.log("🚀 ~ CharacterCard ~ item:", item.value)
  return (
    <div className={s.card}>
      <h1 className={s.card_title}>{item.title}</h1>
      <ul className={s.card_info_list}>
        <li>
          <div className={s.keys_list}>
            {item.keys.map((key, i) => (
              <div key={i}>{key}</div>
            ))}
          </div>
          <div className={s.values_list}>
            {item.value.map((value, i) => (
              <div key={i}>{value}</div>
            ))}
          </div>
        </li>
      </ul>
    </div>
  )
}

export default CharacterCard

CharacterCard.propTypes = {
  item: PropTypes.object.isRequired,
}
