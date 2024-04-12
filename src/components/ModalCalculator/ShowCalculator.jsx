import React from "react"
import PropTypes from "prop-types"
import s from "@styles/components/ShowCalculator.module.scss"

const ShowCalculator = () => {
  return (
    <div>
      <div className={s.pricingCalculator}>
        <div className={s.calculation1}>
          <p className={s.calculations}>Вид</p>
          <p className={s.calculations}>Ставка</p>
          <p className={s.calculations}>Сумма в &quot;сом&quot;</p>
        </div>
        <div className={s.calculation2}>
          <p className={s.calculation}>Импортная пошлина</p>
          <p className={s.calculation}>5 %</p>
          <p className={s.calculation}>Сумма</p>
        </div>
        <div className={s.calculation3}>
          <p className={s.calculation}>Таможенные сборы</p>
          <p className={s.calculation}>557 сом.за Л.С.</p>
          <p className={s.calculation}>Сумма</p>
        </div>
        <div className={s.calculation4}>
          <p className={s.calculation}>НДС</p>
          <p className={s.calculation}>10 %</p>
          <p className={s.calculation}>Сумма</p>
        </div>
        <div className={s.calculation5}>
          <p className={s.calculation}>Утилизационный сбор</p>
          <p className={s.calculation}>0,17 x 20000 сом</p>
          <p className={s.calculation}>Сумма</p>
        </div>
        <div className={s.calculation6}>
          <p className={s.calculation}>Итого</p>
          <p className={s.calculation}></p>
          <p className={s.calculation}>Сумма</p>
        </div>
        <p className={s.text}>
          Расчёт стоимости автомобиля предварительный! Итоговая стоимость на
          день покупки может отличаться и зависит от цены покупки валюты
        </p>
        <button className={s.button}>Позвонить</button>
      </div>
    </div>
  )
}

ShowCalculator.propTypes = {
  closeModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
}

export default ShowCalculator
