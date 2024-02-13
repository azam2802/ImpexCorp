import React from "react"
import "./App.scss"
import { Suspense } from "react"
import { useTranslation } from "react-i18next"
import Header from "@layout/Header/Header"
import Footer from "@layout/Footer/Footer"

function App() {
  const { t } = useTranslation()

  return (
    <Suspense fallback="Loading...">
      <div className="App">
        <Header />
        <h1>{t("text")}</h1>
        <Footer />
      </div>
    </Suspense>
  )
}

export default App
