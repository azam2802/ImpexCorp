import React, { useLayoutEffect, useState } from "react"
import { IoIosArrowUp } from "react-icons/io"
import { IoIosArrowBack } from "react-icons/io"
import s from "@styles/pages/Filtration/FiltrationPage.module.scss"
import { FiltrModal } from "./ui/FiltrModal/FiltrModal"
import { Link } from "react-router-dom"
import { CarCard } from "@components/CarCard/CarCard"
import { motion } from "framer-motion"

export const FiltrationPage = () => {
  const [openModal, setOpenModal] = useState(false)
  const [selectedCar, setSelectedCar] = useState("Корея")
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 375)

  const onShowModal = () => {
    setOpenModal((show) => !show)
  }

  const handleCarClick = (car) => {
    setSelectedCar(car)
  }

  useLayoutEffect(() => {
    const updateScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 375)
    }
    window.addEventListener("resize", updateScreenSize)
    return () => window.removeEventListener("resize", updateScreenSize)
  }, [])

  return (
    <main className={s["main"]}>
      <div className={s["main-title"]}>
        <Link to="/" className={s["back"]}>
          <IoIosArrowBack size={25} color="#19746b" />
          <p>Назад</p>
        </Link>
        <h1 className={s["title"]}>Каталог</h1>
      </div>
      <section className={s["catalog-block"]}>
        <div className={s["filtration-block"]}>
          <div className={s["filtration"]} onClick={onShowModal}>
            <p>Фильтр</p>
            <IoIosArrowUp
              cursor="pointer"
              className={openModal ? s["rotates"] : s["rotate"]}
            />
          </div>

          <div className={s["types-car"]}>
            <div
              className={`${s["country-car"]} ${
                selectedCar === "Китай" ? s["selected-car"] : ""
              }`}
              onClick={() => handleCarClick("Китай")}>
              Китай
            </div>

            <div
              className={`${s["country-car"]} ${
                selectedCar === "Корея" ? s["selected-car"] : ""
              }`}
              onClick={() => handleCarClick("Корея")}>
              Корея
            </div>

            <div
              className={`${s["country-car"]} ${
                selectedCar === "Новинки" ? s["selected-car"] : ""
              }`}
              onClick={() => handleCarClick("Новинки")}>
              Новинки
            </div>
          </div>
        </div>
        {openModal && (
          <motion.div
            initial={isSmallScreen ? { opacity: 0, height: 0 } : { opacity: 0 }}
            animate={
              isSmallScreen
                ? { opacity: 1, height: openModal ? "auto" : 0 }
                : { opacity: 1 }
            }
            transition={{ duration: isSmallScreen ? 0.2 : 1.1 }}
            style={{ overflow: "hidden" }}>
            {openModal && (
              <div>
                <FiltrModal setOpenModal={setOpenModal} />
              </div>
            )}
          </motion.div>
        )}
      </section>

      <CarCard />
    </main>
  )
}
