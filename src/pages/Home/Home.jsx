import React from "react"
import ApplicationForm from "./Sections/ApplicationForm"
import { useTranslation } from "react-i18next"

export const Home = () => {
  const { t } = useTranslation()

  return (
    <main>
      <h1 style={{ marginBottom: "1000px" }}>{t("text")}</h1>
      <ApplicationForm />
    </main>
  )
}

export default Home
