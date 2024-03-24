import React, { useState } from "react"
import PropTypes from "prop-types"
import { IoIosArrowUp } from "react-icons/io"
import { motion, AnimatePresence } from "framer-motion"
import s from "@styles/pages/Catalog/Catalog.module.scss"

export const Select = ({ title, firstType, secondType, thirdType }) => {
  const [openSelect, setOpenSelect] = useState(false)
  const [selectedValue, setSelectedValue] = useState()

  const handleSelect = (value) => {
    setSelectedValue(value)
    setOpenSelect(false)
  }

  return (
    <div>
      <div
        className={s.characteristic}
        onClick={() => setOpenSelect((show) => !show)}>
        <p>{selectedValue ? selectedValue : title}</p>
        <IoIosArrowUp
          cursor="pointer"
          className={openSelect ? s.rotates : s.rotate}
        />
      </div>
      <AnimatePresence>
        {openSelect && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            style={{ overflow: "hidden" }}>
            <div className={s.select}>
              <p onClick={() => handleSelect(firstType)}>{firstType}</p>
              <p onClick={() => handleSelect(secondType)}>{secondType}</p>
              <p onClick={() => handleSelect(thirdType)}>{thirdType}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
Select.propTypes = {
  title: PropTypes.string.isRequired,
  firstType: PropTypes.string.isRequired,
  secondType: PropTypes.string.isRequired,
  thirdType: PropTypes.string.isRequired,
}
