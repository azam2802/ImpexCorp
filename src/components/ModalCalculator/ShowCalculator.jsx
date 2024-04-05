import React from "react"
import s from "@styles/components/AppContent.module.scss"

const ShowCalculator = () => {
  const calculations = [
    { label: "Вид", rate: "Ставка", amount: 'Сумма в "сом"' },
    { label: "Импортная пошлина", rate: "5 %", amount: "Сумма" },
    { label: "Таможенные сборы", rate: "557 сом.за Л.С.", amount: "Сумма" },
    { label: "НДС", rate: "10 %", amount: "Сумма" },
    { label: "Утилизационный сбор", rate: "0,17 x 20000 сом", amount: "Сумма" },
    { label: "Итого", rate: "", amount: "Сумма" },
  ]

  return (
    <div>
      <div className={s.pricingCalculator}>
        {calculations.map((calculation, index) => (
          <div key={index} className={s[`calculation${index + 1}`]}>
            <p className={s.calculation}>{calculation.label}</p>
            <p className={s.calculation}>{calculation.rate}</p>
            <p className={s.calculation}>{calculation.amount}</p>
          </div>
        ))}
        <p className={s.text}>
          Расчёт стоимости автомобиля предварительный! Итоговая стоимость на
          день покупки может отличаться и зависит от цены покупки валюты
        </p>
        <button className={s.button}>Позвонить</button>
      </div>
    </div>
  )
}

export default ShowCalculator
