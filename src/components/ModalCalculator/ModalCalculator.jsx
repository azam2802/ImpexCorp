import React, { useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"
import s from "@styles/components/ModalCalculator.module.scss"
import ShowCalculator from "./ShowCalculator"
import arrow from "@images/arrow.png"

const ModalCalculator = ({ closeModal, showModal }) => {
  const modalRef = useRef(null)
  const [showModalContent, setShowModalContent] = useState(false)
  const [engine, setEngine] = useState("")
  const [showSelectOptions, setShowSelectOptions] = useState(false)

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal()
        setShowModalContent(false)
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
    setShowModalContent(!showModalContent)
  }

  const handleSelectOption = (value) => {
    setEngine(value)
    setShowSelectOptions(false)
  }

  return (
    <>
      {showModal && (
        <div className={s.darker}>
          <div className={s.modal} ref={modalRef}>
            {showModalContent ? (
              <ShowCalculator />
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
                <div className={s.custom_select}>
                  <div
                    className={s.custom_select_selected}
                    onClick={() => setShowSelectOptions(!showSelectOptions)}>
                    {engine ? engine : "Выберите тип двигателя"}
                  </div>
                  <img
                    className={`${s.arrow} ${showSelectOptions ? s.rotated : ""}`}
                    src={arrow}
                    alt="arrow"
                  />
                  {showSelectOptions && (
                    <ul className={s.custom_select_options}>
                      <li
                        className={s.custom_select_option}
                        onClick={() => handleSelectOption("Бензиновый")}>
                        Бензиновый
                      </li>
                      <li
                        className={s.custom_select_option}
                        onClick={() => handleSelectOption("Дизильный")}>
                        Дизильный
                      </li>
                      <li
                        className={s.custom_select_option}
                        onClick={() => handleSelectOption("Гибридный")}>
                        Гибридный
                      </li>
                      <li
                        className={s.custom_select_option}
                        onClick={() => handleSelectOption("Электрический")}>
                        Электрический
                      </li>
                    </ul>
                  )}
                </div>
                <div>
                  <button className={s.close} onClick={handleCalculate}>
                    Просчитать
                  </button>
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
