import React from "react"
import s from "@styles/pages/Home/Catalogs.module.scss"
import { useTranslation } from "react-i18next"
import { CatalogsItem } from "@components/CatalogsItem/CatalogsItem"
export const Catalogs = () => {
  const { t } = useTranslation()

  return (
    <section>
      <div className={s.catalogs}>
        <ul className={s.catalogs_list}>
          <CatalogsItem
            catalogTitle={t("HomePage.CatalogBlock.titles.newProducts")}
          />
          <CatalogsItem
            catalogTitle={t("HomePage.CatalogBlock.titles.fromChina")}
          />
          <CatalogsItem
            catalogTitle={t("HomePage.CatalogBlock.titles.fromKorea")}
          />
        </ul>
      </div>
    </section>
  )
}
