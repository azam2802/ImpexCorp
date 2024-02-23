import React from "react"
import BackgroungImage from "@images/Group 42.png"
import s from "@styles/pages/Home/ApplicationForm.module.scss"

const ApplicationForm = () => {
  return (
    <div>
      <div className={s["container"]}>
        <img
          className={s["background-img"]}
          src={BackgroungImage}
          alt="Background Image"
        />
        <div className={s["application-form"]}>
          <h2>Оставить заявку</h2>
          <form action="submit" method="">
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Ваше имя"
            />
            <input
              type="tel"
              id="ContactPhoneNumber"
              name="ContactPhoneNumber"
              placeholder="Контактный телефон"
              required
            />
            <input
              type="text"
              id="car"
              name="car"
              placeholder="Какая машина интересует?"
              required
            />
            <button type="submit">Отправить</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ApplicationForm
