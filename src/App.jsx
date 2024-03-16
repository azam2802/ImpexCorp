import Layout from "@layout/Layout"
import Home from "@pages/Home/Home"
import React, { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import AboutUs from "@pages/AboutUs/AboutUs"
import Loader from "@components/Loader/Loader"
import PageNotFound from "@pages/Error404/PageNotFound"

const App = () => {
  const router = [
    {
      path: "aboutus",
      element: <AboutUs />,
    },
  ]

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {router.map((item, id) => (
            <Route key={id} path={item.path} element={item.element} />
          ))}
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  )
}

export default App
