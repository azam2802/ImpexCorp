import React from "react"
import PropTypes from "prop-types"
import s from "@styles/components/ModalWindow.module.scss"

const ModalWindow = ({ closeModal, showModal }) => {
  return (
    <div>
      {showModal && (
        <div className={s.modal}>
          <div className={s.modalContent}>
            <p className={s.text}>Modal Window</p>
            <button className={s.close} onClick={closeModal}>
              Close Modal
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

ModalWindow.propTypes = {
  closeModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
}

export default ModalWindow
