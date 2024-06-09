import Layout from "@layout/Layout"
import Home from "@pages/Home/Home"
import React from "react"
import { Route, Routes } from "react-router-dom"
import AboutUs from "@pages/AboutUs/AboutUs"
import PageNotFound from "@pages/PageNotFound/PageNotFound"
import { Catalog } from "@pages/Catalog/Catalog"
import { useAutosList } from "@store/store"
import { useTranslation } from "react-i18next"
import CardInfo from "@pages/CardInfo/CardInfo"
import { Helmet } from "react-helmet"
import urlLogo from "@images/urlLogo.png"

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
    {
      path: "/cardinfo/:id",
      element: <CardInfo />,
    },
  ]

  return (
    <div id="wrapper">
      <Helmet>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://impex-corp.pp.ua/" />
        <meta
          property="og:title"
          content="IMPEX CORP || Импорт и экспорт автомобилей из ОАЭ, Кореи и Китая"
        />
        <meta
          property="og:description"
          content="ОсОО 'Импекс-Корп' предоставляет услуги по покупке и импорту автомобилей из Кореи, Китая, ОАЭ и других стран."
        />
        <meta property="og:image" content={urlLogo} />
      </Helmet>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {router.map((item) => (
            <Route key={item.path} path={item.path} element={item.element} />
          ))}
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App
