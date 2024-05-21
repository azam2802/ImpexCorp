import React, { useState } from "react"
import { FiltrModal } from "./ui/FilterModal/FilterModal"
import { useAutosList, useFilterStore } from "@store/store"
import CarCard from "@components/CarCard/CarCard"
import s from "@styles/pages/Catalog/Catalog.module.scss"
import { IoIosArrowBack, IoIosArrowUp } from "react-icons/io"
import { Link } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { useTranslation } from "react-i18next"

export const Catalog = () => {
  const { t } = useTranslation()
  const { data } = useAutosList()
  const { filteredCars, setFilteredCars } = useFilterStore()

  const [openModal, setOpenModal] = useState(false)

  const onShowModal = () => {
    setOpenModal((show) => !show)
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
        </div>

        <AnimatePresence>
          {openModal && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: openModal ? "auto" : 0 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0, height: 0 }}
              style={{ overflow: "hidden" }}>
              {openModal && (
                <FiltrModal
                  setOpenModal={setOpenModal}
                  setFilteredCars={setFilteredCars}
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className={s.row_catalog}>
          {(filteredCars.length > 0 ? filteredCars : data)
            .filter((item) => item.image.length !== 0)
            .reverse()
            .map((car) => (
              <div className={s.col_4_catalog} key={car.car_slug}>
                <CarCard
                  width="100%"
                  images={import.meta.env.VITE_API + car.image[0].image}
                  car_name={car.car_brand + " " + car.car_model}
                  price={car.price}
                  volume={car.volume}
                  transmission={car.transmission}
                  country={car.country_of_assembly}
                  mileage={car.mileage}
                  year={car.release_period}
                />
              </div>
            ))}
          {data.length === 0 && (
            <h1 className={s.title}>{t("notFoundData")}</h1>
          )}
        </div>
      </section>
    </main>
  )
}
