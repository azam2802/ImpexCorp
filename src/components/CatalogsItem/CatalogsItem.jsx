import React from "react"
import s from "@styles/pages/Home/Catalogs.module.scss"
import CarCard from "@components/CarCard/CarCard"
import PropTypes from "prop-types"
import { motion } from "framer-motion"
import { BsChevronRight } from "react-icons/bs"
import { Link } from "react-router-dom"

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

  return (
    <motion.li
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={s.catalogs_item}>
      <motion.h1 variants={AnimBottom} className={s.catalog_type_title}>
        {catalogTitle}
      </motion.h1>
      <motion.ul variants={AnimBottom} custom={1} className={s.car_card_list}>
        {data.slice(0, 6).map((car) => (
          <CarCard
            key={car.car_slug}
            images={import.meta.env.VITE_API + "/" + car.images[0].image}
            car_name={car.car_name}
            price={car.price}
            volume={car.volume}
            transmission={car.transmission}
            country={car.country_of_assembly}
            mileage={car.mileage}
          />
        ))}
        <Link className={s.next_button} to="catalog">
          <BsChevronRight
            style={{ width: "80px", height: "100%", fill: "#19746b" }}
          />
        </Link>
      </motion.ul>
    </motion.li>
  )
}

CatalogsItem.propTypes = {
  catalogTitle: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
}
