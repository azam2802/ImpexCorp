import React, { useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"
import s from "@styles/components/ModalCalculator.module.scss"
import ShowCalculator from "./ShowCalculator"
import arrow from "@images/arrow.png"

import { useTranslation } from "react-i18next"

const ModalCalculator = ({ closeModal, showModal }) => {
  const modalRef = useRef(null)
  const [showModalContent, setShowModalContent] = useState(false)
  const [engine, setEngine] = useState("")
  const [showSelectOptions, setShowSelectOptions] = useState(false)
  const [isArrowAnimation, setIsArrowAnimation] = useState(false)
  const { t } = useTranslation()

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal()
      setShowModalContent(false)
    }
  }

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden"
      document.body.style.touchAction = "none"
      document.addEventListener("mousedown", handleOutsideClick)
    } else {
      document.body.style.overflow = "unset"
      document.body.style.touchAction = "unset"
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [showModal])

  const handleCalculate = () => {
    setShowModalContent(!showModalContent)
  }

  const handleSelectOption = (value) => {
    setEngine(value)
    setShowSelectOptions(false)
  }

  const handleArrowClick = () => {
    setShowSelectOptions(!showSelectOptions)
    setIsArrowAnimation(!isArrowAnimation)
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
                <div className={s.box}>
                  <div className={s.input__box}>
                    <div className={s.input__box1}>
                      <label className={s.name__input_label}>
                        {t("Calculation.Calculator.brand")}
                      </label>
                      <input
                        type="text"
                        className={s.name__input}
                        placeholder={t("Calculation.Calculator.text")}
                      />
                    </div>
                    <div className={s.input__box2}>
                      <label className={s.name__input_label}>
                        {t("Calculation.Calculator.price")}
                      </label>
                      <input
                        type="text"
                        className={s.name__input}
                        placeholder={t("Calculation.Calculator.text")}
                      />
                    </div>
                    <div className={s.input__box3}>
                      <label className={s.name__input_label}>
                        {t("Calculation.Calculator.power")}
                      </label>
                      <input
                        type="text"
                        className={s.name__input}
                        placeholder={t("Calculation.Calculator.text")}
                      />
                    </div>
                    <div className={s.input__box4}>
                      <label className={s.name__input_label}>
                        {t("Calculation.Calculator.date_of_issue")}
                      </label>
                      <input
                        type="text"
                        className={s.name__input}
                        placeholder={t("Calculation.Calculator.text")}
                      />
                    </div>
                  </div>
                  <div className={s.custom_select}>
                    <div
                      className={s.custom_select_selected}
                      onClick={handleArrowClick}>
                      <p>
                        {engine ? engine : t("Calculation.Calculator.type")}
                      </p>
                      <img
                        className={`${s.arrow} ${isArrowAnimation ? s.active : ""}`}
                        src={arrow}
                        alt="arrow"
                      />
                    </div>

                    {showSelectOptions && (
                      <ul className={s.custom_select_options}>
                        <li
                          className={`${s.custom_select_option} ${engine === t("Calculation.Calculator.petrol") && s.selected}`}
                          onClick={() =>
                            handleSelectOption(
                              t("Calculation.Calculator.petrol"),
                            )
                          }>
                          {t("Calculation.Calculator.petrol")}
                        </li>
                        <li
                          className={`${s.custom_select_option} ${engine === t("Calculation.Calculator.diesel") && s.selected}`}
                          onClick={() =>
                            handleSelectOption(
                              t("Calculation.Calculator.diesel"),
                            )
                          }>
                          {t("Calculation.Calculator.diesel")}
                        </li>
                        <li
                          className={`${s.custom_select_option} ${engine === t("Calculation.Calculator.hybrid") && s.selected}`}
                          onClick={() =>
                            handleSelectOption(
                              t("Calculation.Calculator.hybrid"),
                            )
                          }>
                          {t("Calculation.Calculator.hybrid")}
                        </li>
                        <li
                          className={`${s.custom_select_option} ${engine === t("Calculation.Calculator.electric") && s.selected}`}
                          onClick={() =>
                            handleSelectOption(
                              t("Calculation.Calculator.electric"),
                            )
                          }>
                          {t("Calculation.Calculator.electric")}
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
                <button className={s.close} onClick={handleCalculate}>
                  {t("Calculation.Calculator.button")}
                </button>
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
