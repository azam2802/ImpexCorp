import Logo from "@ui/Logo/Logo"
import React from "react"
import { useTranslation } from "react-i18next"
import s from "@styles/pages/Error404/PageNotFound.module.scss"

const PageNotFound = () => {
  const { t } = useTranslation()
  return (
    <main>
      <section className={s.NotFoundBlock}>
        <Logo />
        <h2>{t("notFoundText")}</h2>
        <h2>
          Error 404<span> :(</span>
        </h2>
      </section>
    </main>
  )
}

export default PageNotFound
