import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import s from "@styles/components/ModalCalculator.module.scss"

const ModalCalculator = ({ closeModal, showModal }) => {
  let ref = useRef()
  useEffect(() => {
    const handleClose = (e) => {
      if (!ref.current.contains(e.target)) {
        closeModal()
        document.removeEventListener("mousedown", handleClose)
      }
    }
    document.addEventListener("mousedown", handleClose)
  })

  useEffect(() => {
    const darker = document.querySelector(`.${s.darker}`)
    if (darker) {
      if (showModal) {
        darker.style.visibility = "visible"
      } else {
        darker.style.visibility = "hidden"
      }
    }
  }, [showModal])

  return (
    <div className={s.darker}>
      <div className={s.modal}>
        <div className={s.modalContent} ref={ref}>
          <p className={s.text}>Modal Window</p>
          <button className={s.close} onClick={closeModal}>
            Close Modal
          </button>
        </div>
      </div>
    </div>
  )
}

ModalCalculator.propTypes = {
  closeModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
}

export default ModalCalculator
