import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { IoIosArrowUp } from "react-icons/io"
import { AnimatePresence, motion } from "framer-motion"
import s from "@styles/pages/Catalog/Catalog.module.scss"

export const VolumeSelect = ({ title, firstType, secondType, thirdType }) => {
  const [openSelect, setOpenSelect] = useState(false)
  const [selectedValue, setSelectedValue] = useState()
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768)

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 768)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const handleSelect = (value) => {
    setSelectedValue(value)
    setOpenSelect(false)
  }

  return (
    <div>
      <div
        className={isSmallScreen ? s.volume_select_adaptive : s.volume_select}
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
            exit={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: openSelect ? "auto" : 0 }}
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

VolumeSelect.propTypes = {
  title: PropTypes.string.isRequired,
  firstType: PropTypes.string.isRequired,
  secondType: PropTypes.string.isRequired,
  thirdType: PropTypes.string.isRequired,
}
