import Layout from "@layout/Layout"
import Home from "@pages/Home/Home"
import React from "react"
import { Route, Routes } from "react-router-dom"
import AboutUs from "@pages/AboutUs/AboutUs"
import PageNotFound from "@pages/Error404/PageNotFound"

const App = () => {
  const router = [
    {
      path: "about",
      element: <AboutUs />,
    },
  ]

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {router.map((item, id) => (
          <Route key={id} path={item.path} element={item.element} />
        ))}
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}

export default App
