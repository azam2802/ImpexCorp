import Layout from "@layout/Layout"
import Home from "@pages/Home/Home"
import React, { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import AboutUs from "@pages/AboutUs/AboutUs"

const App = () => {
  const router = [
    {
      path: "aboutus",
      element: <AboutUs />,
    },
  ]

  return (
    <Suspense fallback="Loading...">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {router.map((item, id) => (
            <Route key={id} path={item.path} element={item.element} />
          ))}
          <Route path="*" element={<h1>ERROR 404</h1>} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
