import React, { useEffect } from "react"
import PropTypes from "prop-types"
import s from "@styles/components/ModalWindow.module.scss"

const ModalWindow = ({ closeModal, showModal }) => {
  useEffect(() => {
    const modal = document.querySelector(`.${s.modal}`)
    if (modal) {
      if (showModal) {
        modal.classList.add(s.show)
      } else {
        modal.classList.remove(s.show)
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

ModalWindow.propTypes = {
  closeModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
}

export default ModalWindow
