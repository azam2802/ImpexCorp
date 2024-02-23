import React from "react"
import "./App.scss"
import { Suspense } from "react"
import { useTranslation } from "react-i18next"
import Header from "@layout/Header/Header"
import Footer from "@layout/Footer/Footer"
import BackToTop from "@ui/BackToTop/BackToTop"
import Home from "@pages/Home/Home"

function App() {
  const { t } = useTranslation()

  return (
    <Suspense fallback="Loading...">
      <div className="App">
        <Header />
        <h1 style={{ marginBottom: "1000px" }}>{t("text")}</h1>
        <BackToTop />
        <Home />
        <Footer />
      </div>
    </Suspense>
  )
}

export default App
