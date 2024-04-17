import React from "react"
import PropTypes from "prop-types"
import s from "@styles/components/ShowCalculator.module.scss"
import { useTranslation } from "react-i18next"

const ShowCalculator = () => {
  const { t } = useTranslation("Calculation")

  return (
    <div>
      <div className={s.pricingCalculator}>
        <div className={s.calculation1}>
          <div className={s.summa1}>
            <p className={s.calculations}>{t("Calculation.Calculator.view")}</p>
            <p className={s.calculations}>{t("Calculation.Calculator.bid")}</p>
            <p className={s.calculations}>
              {t("Calculation.Calculator.amount")}
            </p>
          </div>
        </div>
        <div className={s.calculation2}>
          <div className={s.summa2}>
            <p className={s.calculation}>{t("Calculation.Calculator.duty")}</p>
            <p className={s.calculation}>
              {t("Calculation.Calculator.five_percent")}
            </p>
            <p className={s.calculation}>{t("Calculation.Calculator.sum")}</p>
          </div>
        </div>
        <div className={s.calculation3}>
          <div className={s.summa3}>
            <p className={s.calculation}>{t("Calculation.Calculator.fees")}</p>
            <p className={s.calculation}>{t("Calculation.Calculator.som1")}</p>
            <p className={s.calculation}>{t("Calculation.Calculator.sum")}</p>
          </div>
        </div>
        <div className={s.calculation4}>
          <div className={s.summa4}>
            <p className={s.calculation}>{t("Calculation.Calculator.VAT")}</p>
            <p className={s.calculation}>
              {t("Calculation.Calculator.ten_percent")}
            </p>
            <p className={s.calculation}>{t("Calculation.Calculator.sum")}</p>
          </div>
        </div>
        <div className={s.calculation5}>
          <div className={s.summa5}>
            <p className={s.calculation}>
              {t("Calculation.Calculator.collection")}
            </p>
            <p className={s.calculation}>{t("Calculation.Calculator.som2")}</p>
            <p className={s.calculation}>{t("Calculation.Calculator.sum")}</p>
          </div>
        </div>
        <div className={s.calculation6}>
          <div className={s.summa6}>
            <p className={s.calculation}>{t("Calculation.Calculator.Total")}</p>
            <p className={s.calculation}></p>
            <p className={s.calculation}>{t("Calculation.Calculator.sum")}</p>
          </div>
        </div>
        <p className={s.text}>{t("Calculation.Calculator.text1")}</p>
        <button className={s.button}>
          {t("Calculation.Calculator.button1")}
        </button>
      </div>
    </div>
  )
}

ShowCalculator.propTypes = {
  closeModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
}

export default ShowCalculator
