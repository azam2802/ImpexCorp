import React from "react"
import s from "@styles/pages/Home/Catalogs.module.scss"
import { CarCard } from "@components/CarCard/CarCard"
import PropTypes from "prop-types"
import { motion } from "framer-motion"
import { BsChevronRight } from "react-icons/bs"

export const CatalogsItem = ({ catalogTitle }) => {
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

  const myArr = Array.from({ length: 6 })
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
        {myArr.map((_, index) => (
          <CarCard key={index} />
        ))}
        <li className={s.next_button}>
          <BsChevronRight
            alt="right-chevron"
            style={{ width: "80px", height: "100%", fill: "#19746b" }}
          />
        </li>
      </motion.ul>
    </motion.li>
  )
}

CatalogsItem.propTypes = {
  catalogTitle: PropTypes.string.isRequired,
}
