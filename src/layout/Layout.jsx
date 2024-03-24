import React from "react"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import BackToTop from "@ui/BackToTop/BackToTop"
import { Outlet, useLocation } from "react-router-dom"
import ModalCalculator from "@components/ModalWindow/ModalCalculator"
import { useModalState } from "@store/store"

const Layout = () => {
  const { key } = useLocation()
  console.log(key)
  const { isModalOpen, setIsModalOpen } = useModalState()

  const openModal = () => {
    setIsModalOpen(true)
  }

  return (
    <>
      <Header openModal={openModal} />
      <Outlet />
      <BackToTop />
      {key != "default" ? <Footer /> : ""}
      <ModalCalculator
        closeModal={() => setIsModalOpen(false)}
        showModal={isModalOpen}
      />
    </>
  )
}

export default Layout
