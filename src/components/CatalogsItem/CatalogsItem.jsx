import React from "react"
import s from "@styles/pages/Home/Catalogs.module.scss"
import { CarCard } from "@components/CarCard/CarCard"
import right from "@images/chevron-right.svg"
import { useTranslation } from "react-i18next"
// eslint-disable-next-line react/prop-types
export const CatalogsItem = ({ catalogTitle }) => {
  const { t } = useTranslation()
  const myArr = Array.from({ length: 6 })
  return (
    <li className={s["catalogs-item"]}>
      <h1 className={s["catalog-type-title"]}>{t(catalogTitle)}</h1>
      <ul className={s["car-card-list"]}>
        {myArr.map((_, index) => (
          <CarCard key={index} />
        ))}
        <li className={s["next-button"]}>
          <img src={right} alt="right-chevron" />
        </li>
      </ul>
    </li>
  )
}
