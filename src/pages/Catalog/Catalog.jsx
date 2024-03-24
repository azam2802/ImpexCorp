import React, { useState } from "react"
import { IoIosArrowUp } from "react-icons/io"
import { IoIosArrowBack } from "react-icons/io"
import s from "@styles/pages/Catalog/Catalog.module.scss"
import { FiltrModal } from "./ui/FilterModal/FilterModal"
import { Link } from "react-router-dom"
import { CarCard } from "@components/CarCard/CarCard"
import { AnimatePresence, motion } from "framer-motion"
import { useTranslation } from "react-i18next"

export const Catalog = () => {
  const { t } = useTranslation()

  const [openModal, setOpenModal] = useState(false)
  const [selectedCar, setSelectedCar] = useState("Корея")

  const onShowModal = () => {
    setOpenModal((show) => !show)
  }

  const handleCarClick = (car) => {
    setSelectedCar(car)
  }

  return (
    <main className={s.main}>
      <div className={s.main_title}>
        <Link to="/" className={s.back}>
          <IoIosArrowBack size={25} color="#19746b" />
          <p>Назад</p>
        </Link>
        <h1 className={s.title}>{t("Catalog.title")}</h1>
      </div>
      <section className={s.catalog_block}>
        <div className={s.filtration_block}>
          <div
            className={openModal ? s.filtration_open : s.filtration}
            onClick={onShowModal}>
            <p>{t("Catalog.filter")}</p>
            <IoIosArrowUp
              cursor="pointer"
              className={openModal ? s.rotates : s.rotate}
            />
          </div>

          <div className={s.types_car}>
            <div
              className={`${s.country_car} ${
                selectedCar === "Китай" ? s.selected_car : ""
              }`}
              onClick={() => handleCarClick("Китай")}>
              {t("Catalog.country.chine")}
            </div>

            <div
              className={`${s.country_car} ${
                selectedCar === "Корея" ? s.selected_car : ""
              }`}
              onClick={() => handleCarClick("Корея")}>
              {t("Catalog.country.korea")}
            </div>

            <div
              className={`${s.country_car} ${
                selectedCar === "Новинки" ? s.selected_car : ""
              }`}
              onClick={() => handleCarClick("Новинки")}>
              {t("Catalog.country.newItems")}
            </div>
          </div>
        </div>
        <AnimatePresence>
          {openModal && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: openModal ? "auto" : 0 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0, height: 0 }}
              style={{ overflow: "hidden" }}>
              {openModal && <FiltrModal setOpenModal={setOpenModal} />}
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      <CarCard />
    </main>
  )
}
