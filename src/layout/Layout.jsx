import React from "react"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import BackToTop from "@ui/BackToTop/BackToTop"
import { Outlet } from "react-router-dom"
import ModalCalculator from "@components/ModalCalculator/ModalCalculator"

import { useModalState } from "@store/store"
import AppContent from "@components/ModalCalculator/AppContent"

const Layout = () => {
  const { isModalOpen, setIsModalOpen } = useModalState()

  const openModal = () => {
    setIsModalOpen(true)
  }

  return (
    <>
      <Header openModal={openModal} />
      <Outlet />
      <BackToTop />
      <Footer />
      <ModalCalculator
        closeModal={() => setIsModalOpen(false)}
        showModal={isModalOpen}
      />
      <AppContent />
    </>
  )
}

export default Layout
