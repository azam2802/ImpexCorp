import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { IoIosArrowUp } from "react-icons/io"
import { AnimatePresence, motion } from "framer-motion"
import s from "@styles/pages/Catalog/Catalog.module.scss"
import { useFilter } from "@store/store"

export const VolumeSelect = ({
  title,
  filterId,
  firstType,
  secondType,
  thirdType,
}) => {
  const [openSelect, setOpenSelect] = useState(false)
  const [selectedValue, setSelectedValue] = useState()
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 769)

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 769)
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

  const { getData } = useFilter()
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
              <p
                onClick={() => {
                  handleSelect(firstType)
                  getData(firstType, filterId)
                }}>
                {firstType}
              </p>
              <p
                onClick={() => {
                  handleSelect(secondType)
                  getData(secondType, filterId)
                }}>
                {secondType}
              </p>
              <p
                onClick={() => {
                  handleSelect(thirdType)
                  getData(thirdType, filterId)
                }}>
                {thirdType}
              </p>
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
  filterId: PropTypes.string.isRequired,
}
