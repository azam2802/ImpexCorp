import React from "react"
import s from "@styles/pages/Home/Catalogs.module.scss"
import { useTranslation } from "react-i18next"
import { CatalogsItem } from "@components/CatalogsItem/CatalogsItem"
import { useAutosList } from "@store/store"

export const Catalogs = () => {
  const { t } = useTranslation()
  const { data } = useAutosList()

  return (
    <section>
      <div className={s.catalogs}>
        <ul className={s.catalogs_list}>
          {data.length > 0 ? (
            <>
              <CatalogsItem
                catalogTitle={t("HomePage.CatalogBlock.titles.newProducts")}
                data={data}
              />
              <CatalogsItem
                catalogTitle={t("HomePage.CatalogBlock.titles.fromChina")}
                data={[...data].filter((item) => item.country == "CH")}
              />
              <CatalogsItem
                catalogTitle={t("HomePage.CatalogBlock.titles.fromKorea")}
                data={[...data].filter((item) => item.country == "SK")}
              />
            </>
          ) : (
            <>
              <h1 className={s.catalog_type_title} style={{ fontSize: "44px" }}>
                {t("HomePage.CatalogBlock.titles.mainTitle")}
              </h1>
              <h1 className={s.catalog_type_title}>{t("notFoundData")}</h1>
            </>
          )}
        </ul>
      </div>
    </section>
  )
}
