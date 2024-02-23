import React from "react"
import s from "@styles/pages/Home/Catalogs.module.scss"
import { useTranslation } from "react-i18next"
import { CatalogsItem } from "@components/CatalogsItem/CatalogsItem"
export const Catalogs = () => {
  const { t } = useTranslation()

  return (
    <div className={s["catalogs"]}>
      <h1 className={s["catalogs-title"]}>{t("Каталог")}</h1>
      <ul>
        <CatalogsItem catalogTitle={"Новинки"} />
        <CatalogsItem catalogTitle={"Авто из Китая"} />
        <CatalogsItem catalogTitle={"Авто из Кореи"} />
      </ul>
    </div>
  )
}
