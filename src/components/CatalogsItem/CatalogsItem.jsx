import React, { useEffect, useState } from "react"
import s from "@styles/pages/Home/Catalogs.module.scss"
import CarCard from "@components/CarCard/CarCard"
import PropTypes from "prop-types"
import { motion } from "framer-motion"
import { BsChevronRight } from "react-icons/bs"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode } from "swiper/modules"
import { useTranslation } from "react-i18next"

export const CatalogsItem = ({ catalogTitle, data }) => {
  const AnimBottom = {
    hidden: {
      y: 150,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: custom * 0.2 },
    }),
  }
  const { t } = useTranslation()
  const [bodyWidth, setBodyWidth] = useState(0)
  useEffect(() => {
    const updateBodyWidth = () => {
      setBodyWidth(document.body.clientWidth)
    }

    window.addEventListener("resize", updateBodyWidth)

    updateBodyWidth()

    return () => {
      window.removeEventListener("resize", updateBodyWidth)
    }
  }, [])

  return (
    <motion.li
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={s.catalogs_item}>
      <motion.h2 variants={AnimBottom} className={s.catalog_type_title}>
        {catalogTitle}
      </motion.h2>
      <motion.ul variants={AnimBottom} custom={1} className={s.car_card_list}>
        {data.length > 0 ? (
          <Swiper
            slidesPerView={
              bodyWidth > 1024
                ? 3.1
                : bodyWidth > 768
                  ? 2.3
                  : bodyWidth > 565
                    ? 2
                    : bodyWidth > 410
                      ? 1.4
                      : 1.1
            }
            style={{ width: "100%" }}
            freeMode={true}
            modules={[FreeMode]}>
            {[...data]
              .filter((item) => item.images.length != 0)
              .reverse()
              .slice(0, 6)
              .map((car) => (
                <SwiperSlide key={car.id}>
                  <CarCard
                    images={import.meta.env.VITE_API + car.images[0].image}
                    car_name={car.car_brand + " " + car.car_model}
                    price={car.price}
                    volume={car.volume}
                    transmission={car.transmission}
                    country={car.country_of_assembly}
                    mileage={car.mileage}
                    year={car.release_period}
                    fuel={car.fuel}
                    id={car.id}
                  />
                </SwiperSlide>
              ))}
            <SwiperSlide>
              <Link className={s.next_button} to="catalog">
                <BsChevronRight
                  style={{ width: "80px", height: "100%", fill: "#19746b" }}
                />
              </Link>
            </SwiperSlide>
          </Swiper>
        ) : (
          <h2 className={s.catalog_type_title}>{t("notFoundData")}</h2>
        )}
      </motion.ul>
    </motion.li>
  )
}

CatalogsItem.propTypes = {
  catalogTitle: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
}
