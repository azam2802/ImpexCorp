import React from "react"
import s from "@styles/pages/Home/Catalogs.module.scss"
import { useTranslation } from "react-i18next"
import { CatalogsItem } from "@components/CatalogsItem/CatalogsItem"
import { useAutosList } from "@store/store"

export const Catalogs = () => {
  const { t } = useTranslation()
  const { data } = useAutosList()

  const apiData = [...data].reverse()

  return (
    <section>
      <div className={s.catalogs}>
        <ul className={s.catalogs_list}>
          <CatalogsItem
            catalogTitle={t("HomePage.CatalogBlock.titles.newProducts")}
            data={apiData}
          />
          <CatalogsItem
            catalogTitle={t("HomePage.CatalogBlock.titles.fromChina")}
            data={apiData}
          />
          <CatalogsItem
            catalogTitle={t("HomePage.CatalogBlock.titles.fromKorea")}
            data={apiData}
          />
        </ul>
      </div>
    </section>
  )
}
