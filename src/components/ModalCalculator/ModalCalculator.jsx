import React, { useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"
import s from "@styles/components/ModalCalculator.module.scss"
import AppContent from "./AppContent"

const ModalCalculator = ({ closeModal, showModal }) => {
  const modalRef = useRef(null)
  const [showAppContent, setShowAppContent] = useState(false)
  const [engine, setEngine] = useState("")

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
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [showModal, closeModal])

  const handleCalculate = () => {
    setShowAppContent(true)
  }

  const handleAppContentClick = () => {}

  return (
    <>
      {showModal && (
        <div className={s.darker}>
          <div className={s.modal} ref={modalRef}>
            {showAppContent ? (
              <AppContent onClick={handleAppContentClick} />
            ) : (
              <div className={s.modalContent}>
                <div className={s.input__box}>
                  <div className={s.input__box1}>
                    <label className={s.name__input_label}>Марка авто</label>
                    <input type="text" className={s.name__input} value="text" />
                  </div>
                  <div className={s.input__box2}>
                    <label className={s.name__input_label}>Стоимость</label>
                    <input type="text" className={s.name__input} value="text" />
                  </div>
                  <div className={s.input__box3}>
                    <label className={s.name__input_label}>Мощность</label>
                    <input type="text" className={s.name__input} value="text" />
                  </div>
                  <div className={s.input__box4}>
                    <label className={s.name__input_label}>Дата выпуска</label>
                    <input type="text" className={s.name__input} value="text" />
                  </div>
                </div>
                <div className={s.input__type}>
                  <select
                    id="engine"
                    value={engine}
                    onChange={(e) => setEngine(e.target.value)}
                    className={s.engineSelect}>
                    <option value="" disabled hidden>
                      Выберите тип двигателя
                    </option>
                    <option className={s.petrol} value="petrol">
                      Бензиновый
                    </option>
                    <option className={s.diesel} value="diesel">
                      Дизельный
                    </option>
                    <option className={s.hybrid} value="hybrid">
                      Гибридный
                    </option>
                    <option className={s.electric} value="electric">
                      Электрический
                    </option>
                  </select>
                  <div>
                    <button className={s.close} onClick={handleCalculate}>
                      Просчитать
                    </button>
                  </div>
                </div>
              </div>
            )}
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
