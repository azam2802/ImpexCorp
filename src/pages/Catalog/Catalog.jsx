import React, { useState } from "react"
import { IoIosArrowUp } from "react-icons/io"
import { IoIosArrowBack } from "react-icons/io"
import s from "@styles/pages/Catalog/Catalog.module.scss"
import { FiltrModal } from "./ui/FilterModal/FilterModal"
import { Link } from "react-router-dom"
import CarCard from "@components/CarCard/CarCard"
import { AnimatePresence, motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { useAutosList } from "@store/store"
import Loader from "@components/Loader/Loader"

export const Catalog = () => {
  const { t } = useTranslation()
  const { data } = useAutosList()
  const [openModal, setOpenModal] = useState(false)
  const [selectedCar, setSelectedCar] = useState("Корея")

  const onShowModal = () => {
    setOpenModal((show) => !show)
  }

  const handleCarClick = (car) => {
    setSelectedCar(car)
  }

  return (
    <main className={s.Catalog}>
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
        <div className={s.row_catalog}>
          {data.length > 0 ? (
            [...data].reverse().map((i) => (
              <div className={s.col_4_catalog} key={i.car_slug}>
                <CarCard
                  width="100%"
                  images={`http://34.159.107.65${i.images[0].image}`}
                  car_name={i.car_name}
                  price={i.price}
                  mileage={i.mileage}
                />
              </div>
            ))
          ) : (
            <Loader />
          )}
        </div>
      </section>
    </main>
  )
}
