import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import s from "@styles/components/ModalCalculator.module.scss"

const ModalCalculator = ({ closeModal, showModal }) => {
  const modalRef = useRef(null)

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal()
      }
    }

    if (showModal) {
      document.addEventListener("mousedown", handleOutsideClick)
      document.body.style.overflow = "hidden"
    } else {
      document.removeEventListener("mousedown", handleOutsideClick)
      document.body.style.overflow = "auto"
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [showModal, closeModal])

  return (
    <>
      {showModal && (
        <div className={s.darker}>
          <div className={s.modal} ref={modalRef}>
            <div className={s.modalContent}>
              <p className={s.text}>Modal Window</p>
              <button className={s.close} onClick={closeModal}>
                Close Modal
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

ModalCalculator.propTypes = {
  closeModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
}
export default ModalCalculator
