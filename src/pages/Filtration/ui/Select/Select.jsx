import React, { useState } from "react"
import PropTypes from "prop-types"
import { IoIosArrowUp } from "react-icons/io"
import { motion } from "framer-motion"
import s from "@styles/pages/Filtration/FiltrationPage.module.scss"

export const Select = ({ title, firstType, secondType, thirdType }) => {
  const [openSelect, setOpenSelect] = useState(false)
  const [selectedValue, setSelectedValue] = useState(title)

  const handleSelect = (value) => {
    setSelectedValue(value)
  }

  return (
    <div>
      <div className={s["characteristic"]}>
        <p>{selectedValue}</p>
        <IoIosArrowUp
          cursor="pointer"
          onClick={() => setOpenSelect((show) => !show)}
          className={openSelect ? s["rotates"] : s["rotate"]}
        />
      </div>
      {openSelect && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: openSelect ? "auto" : 0 }}
          transition={{ duration: 0.2 }}
          style={{ overflow: "hidden" }}>
          <div className={s["select"]}>
            <p onClick={() => handleSelect(firstType)}>{firstType}</p>
            <p onClick={() => handleSelect(secondType)}>{secondType}</p>
            <p onClick={() => handleSelect(thirdType)}>{thirdType}</p>
          </div>
        </motion.div>
      )}
    </div>
  )
}

Select.propTypes = {
  title: PropTypes.string.isRequired,
  firstType: PropTypes.string.isRequired,
  secondType: PropTypes.string.isRequired,
  thirdType: PropTypes.string.isRequired,
}
