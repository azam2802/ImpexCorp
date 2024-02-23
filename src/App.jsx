import React from "react"
import "./App.scss"
import { Suspense } from "react"
import Header from "@layout/Header/Header"
import Footer from "@layout/Footer/Footer"
import BackToTop from "@ui/BackToTop/BackToTop"
import Home from "@pages/Home/Home"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <Suspense fallback="Loading...">
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <BackToTop />
        <Footer />
      </div>
    </Suspense>
  )
}

export default App
