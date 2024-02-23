import React from "react"
import "@styles/pages/Home/GreetingBlock.module.scss"
import carImg from "@images/car.png"

const GreetingBlock = () => {
  return (
    <div>
      <div className="mainBlock">
        <h2 className="title">Добро пожаловать в автосалон Impex Corp</h2>
        <p className="text">
          Impex Corp — это авто компания, которая предлагает своим клиентам
          широкий ассортимент товаров и услуг, связанных с автомобильной
          индустрией. Став ведущим игроком на рынке, Impex Corp обладает
          несколькими ключевыми преимуществами, которые делают их идеальным
          выбором для покупателей
        </p>
        <img className="carImg" src={carImg} alt="Car" />
        <button className="button">Подробнее</button>
      </div>
    </div>
  )
}

export default GreetingBlock
