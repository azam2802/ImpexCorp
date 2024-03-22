import React from "react"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import BackToTop from "@ui/BackToTop/BackToTop"
import { Outlet } from "react-router-dom"
import useModalState from "../store/useModalState"
import ModalWindow from "@components/ModalWindow/ModalWindow"

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
      {isModalOpen && (
        <ModalWindow
          closeModal={() => setIsModalOpen(false)}
          showModal={isModalOpen}
        />
      )}
    </>
  )
}

export default Layout
