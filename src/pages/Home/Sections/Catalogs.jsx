import React from "react"
import s from "@styles/pages/Home/Catalogs.module.scss"
import { useTranslation } from "react-i18next"
import { CatalogsItem } from "@components/CatalogsItem/CatalogsItem"
// import { useAutosList } from "@store/store"

export const Catalogs = () => {
  const { t } = useTranslation()
  // const { data } = useAutosList()

  const data = [
    {
      car_name: "Mercedec",
      images: "",
      price: "11200$",
      mileage: "120",
      volume: "25",
      country: "Korean",
      transmission: "500",
      width: "274px",
    },
    {
      car_name: "Mercedec",
      images: "",
      price: "11200$",
      mileage: "120",
      volume: "25",
      country: "Korean",
      transmission: "500",
      width: "274px",
    },
    {
      car_name: "Mercedec",
      images: "",
      price: "11200$",
      mileage: "120",
      volume: "25",
      country: "Korean",
      transmission: "500",
      width: "274px",
    },
    {
      car_name: "Mercedec",
      images: "",
      price: "11200$",
      mileage: "120",
      volume: "25",
      country: "Korean",
      transmission: "500",
      width: "274px",
    },
  ]
  return (
    <section>
      <div className={s.catalogs}>
        <ul className={s.catalogs_list}>
          <CatalogsItem
            catalogTitle={t("HomePage.CatalogBlock.titles.newProducts")}
            data={data}
          />
          <CatalogsItem
            catalogTitle={t("HomePage.CatalogBlock.titles.fromChina")}
            data={data}
          />
          <CatalogsItem
            catalogTitle={t("HomePage.CatalogBlock.titles.fromKorea")}
            data={data}
          />
        </ul>
      </div>
    </section>
  )
}
