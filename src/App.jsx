import Layout from "@layout/Layout"
import Home from "@pages/Home/Home"
import React, { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import "./App.scss"

const App = () => {
  return (
    <Suspense fallback="Loading...">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<h1>ERROR 404</h1>} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
