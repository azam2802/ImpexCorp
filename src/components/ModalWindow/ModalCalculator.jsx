import React, { useEffect } from "react"
import PropTypes from "prop-types"
import s from "@styles/components/ModalWindow.module.scss"

const ModalCalculator = ({ closeModal, showModal }) => {
  useEffect(() => {
    const darker = document.querySelector(`.${s.darker}`)
    if (darker) {
      if (showModal) {
        darker.classList.add(s.show)
      } else {
        darker.classList.remove(s.show)
      }
    }
  }, [showModal])

  return (
    <div>
      <div className={s.darker}>
        <div className={s.modal}>
          <div className={s.modalContent}>
            <p className={s.text}>Modal Window</p>
            <button className={s.close} onClick={closeModal}>
              Close Modal
            </button>
          </div>
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
