import Layout from "@layout/Layout"
import Home from "@pages/Home/Home"
import React from "react"
import { Route, Routes } from "react-router-dom"
import AboutUs from "@pages/AboutUs/AboutUs"
import PageNotFound from "@pages/PageNotFound/PageNotFound"
import { Catalog } from "@pages/Catalog/Catalog"
import { useAutosList } from "@store/store"
import { useTranslation } from "react-i18next"

const App = () => {
  const { fetchData } = useAutosList()
  const { i18n } = useTranslation()
  fetchData(i18n.language)

  const router = [
    {
      path: "/about",
      element: <AboutUs />,
    },
    {
      path: "/catalog",
      element: <Catalog />,
    },
  ]

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {router.map((item, id) => (
          <Route key={id} path={item.path} element={item.element} />
        ))}
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App
