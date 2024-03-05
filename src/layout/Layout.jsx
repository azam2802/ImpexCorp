import React from "react"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import BackToTop from "@ui/BackToTop/BackToTop"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <BackToTop />
      <Footer />
    </>
  )
}

export default Layout
