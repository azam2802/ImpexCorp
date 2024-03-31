import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import s from "@styles/components/ModalCalculator.module.scss"

const ModalCalculator = ({ closeModal, showModal }) => {
  const modalRef = useRef(null)

  useEffect(() => {
    if (showModal) {
      const handleOutsideClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
          closeModal()
        }
      }
      document.addEventListener("mousedown", handleOutsideClick)
      document.body.style.overflow = "hidden"

      return () => {
        document.removeEventListener("mousedown", handleOutsideClick)
        document.body.style.overflow = "unset"
      }
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
