import React, { useState } from "react"
import PropTypes from "prop-types"
import { IoIosArrowUp } from "react-icons/io"
import { motion, AnimatePresence } from "framer-motion"
import s from "@styles/pages/Catalog/Catalog.module.scss"
import { useFilter } from "@store/store"

export const Select = ({ title, options, filterId }) => {
  const [openSelect, setOpenSelect] = useState(false)
  const [selectedValue, setSelectedValue] = useState(null)
  const { getData } = useFilter()

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
              <div className={s.options_container}>
                {options.map((option) => (
                  <p
                    key={option.value}
                    className={s.option}
                    onClick={() => {
                      handleSelect(option.value)
                      getData(option.value, filterId)
                    }}>
                    {option.label}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

Select.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  filterId: PropTypes.string.isRequired,
}

export default Select
