import React from "react"
import "./App.scss"
import { Suspense } from "react"
import { useTranslation } from "react-i18next"

function App() {
  const { t, i18n } = useTranslation()

  return (
    <Suspense fallback='Loading...'>
      <div className="App">
        <h1>Hello</h1>
      </div>
    </Suspense>
  )
}

export default App
