import CarCard from "@components/CarCard/CarCard"
import { useAutosList } from "@store/store"
import s from "@styles/pages/Catalog/Catalog.module.scss"
import { AnimatePresence, motion } from "framer-motion"
import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { IoIosArrowBack, IoIosArrowUp } from "react-icons/io"
import { Link } from "react-router-dom"
import { IoSearch } from "react-icons/io5"

import { FiltrModal } from "./ui/FilterModal/FilterModal"

export const Catalog = () => {
  const { t } = useTranslation()
  const { data } = useAutosList()
  const [openModal, setOpenModal] = useState(false)
  const [search, setSearch] = useState("")
  const [selectedCar, setSelectedCar] = useState("Все")

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
        <div className={s.search}>
          <IoSearch />
          <input
            type="search"
            placeholder={t("Catalog.search")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
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
                selectedCar === "Все" ? s.selected_car : ""
              }`}
              onClick={() => handleCarClick("Все")}>
              {t("Catalog.country.all")}
            </div>

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
            data.reverse().map((car) => (
              <div className={s.col_4_catalog} key={car.car_slug}>
                <CarCard
                  width="100%"
                  images={`http://209.38.228.54:81/${car.images[0].image}`}
                  car_name={car.car_name}
                  price={car.price}
                  volume={car.volume}
                  transmission={car.transmission}
                  country={car.country_of_assembly}
                  mileage={car.mileage}
                />
              </div>
            ))
          ) : (
            <h1 className={s.title}>Извините, ничего не найдено...</h1>
          )}
        </div>
      </section>
    </main>
  )
}
