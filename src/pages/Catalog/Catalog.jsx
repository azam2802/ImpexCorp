import CarCard from "@components/CarCard/CarCard"
// import { useAutosList } from "@store/store"
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
  // const { data } = useAutosList()
  const data = [
    {
      car_name: "Mercedes AMG E63",
      car_slug: "mercedes-amg-e63",
      images:
        "https://wieck-mbusa-production.s3.amazonaws.com/photos/a743fe485608cdfb64be0fced5f3e168535cfe95/preview-928x522.jpg",
      country_of_assembly: "Германия",
      volume: 12,
      fuel: "Бензин",
      transmission: "АКПП",
      mileage: 15000,
      release_period: 2018,
      price: 150000,
    },
    {
      car_name: "Mercedes Maybach S600",
      car_slug: "mercedes-maybach-s600",
      images:
        "https://classicthrottleshop.com/wp-content/uploads/2022/11/2015-Mercedes-Benz-Maybach-S600-Black-wm-1.jpg",
      country_of_assembly: "Германия",
      volume: 12,
      fuel: "Бензин",
      transmission: "АКПП",
      mileage: 15000,
      release_period: 2022,
      price: 150000,
    },
    {
      car_name: "BYD HAN",
      car_slug: "byd-han",
      images:
        "https://www.mstc.com.jo/sites/default/files/2023-04/section3%20%282%29.png",
      country_of_assembly: "Германия",
      volume: 12,
      fuel: "Бензин",
      transmission: "Редуктор",
      mileage: 15000,
      release_period: 2022,
      price: 150000,
    },
    {
      car_name: "Zeekr X",
      car_slug: "zeekr-x",
      images:
        "https://avatars.mds.yandex.net/get-verba/997355/2a000001877ffdc2e11213b722698a1702bf/cattouchret",
      country_of_assembly: "Германия",
      volume: 12,
      fuel: "Электро",
      transmission: "Редуктор",
      mileage: 15000,
      release_period: 2023,
      price: 150000,
    },
    {
      car_name: "BYD Song",
      car_slug: "byd-song",
      images:
        "https://китайские-автомобили.рф/wp-content/uploads/2023/04/byd_song_plus_new_1_1000.jpg",
      country_of_assembly: "Германия",
      volume: 12,
      fuel: "Бензин",
      transmission: "МКПП",
      mileage: 15000,
      release_period: 2022,
      price: 150000,
    },
  ]
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
                  // images={`http://209.38.228.54:81/${car.images[0].image}`}
                  images={car.images}
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
