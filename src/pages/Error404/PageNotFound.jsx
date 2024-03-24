import Logo from "@ui/Logo/Logo"
import React from "react"
import { useTranslation } from "react-i18next"
import s from "@styles/pages/Error404/PageNotFound.module.scss"
import Header from "@layout/Header/Header"

const PageNotFound = () => {
  const { t } = useTranslation()
  return (
    <>
      <Header />
      <main>
        <section className={s.NotFoundBlock}>
          <Logo />
          <h1>{t("notFoundText")}</h1>
          <h2 id={s.error}>
            Error 404<span id={s.smile}>:(</span>
          </h2>
        </section>
      </main>
    </>
  )
}

export default PageNotFound
