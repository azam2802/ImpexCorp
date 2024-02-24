import React from "react"
import s from "@styles/pages/Home/GreetingBlock.module.scss"
import carImg from "@images/car.png"

const GreetingBlock = () => {
  return (
    <div className={s["container"]}>
      <div className={s["row"]}>
        <div className={s["col-6"]}>
          <div className={s["carImg"]}>
            <img src={carImg} alt="Car" />
          </div>
        </div>
        <div className={s["col-6"]}>
          <h2 className={s["title"]}>
            Добро пожаловать в автосалон Impex Corp{" "}
          </h2>
          <p className={s["text"]}>
            Impex Corp — это авто компания, которая предлагает своим клиентам
            широкий ассортимент товаров и услуг, связанных с автомобильной
            индустрией. Став ведущим игроком на рынке, Impex Corp обладает
            несколькими ключевыми преимуществами, которые делают их идеальным
            выбором для покупателей
          </p>
          <button className={s["button"]}>Подробнее</button>
        </div>
      </div>
    </div>
  )
}

export default GreetingBlock
