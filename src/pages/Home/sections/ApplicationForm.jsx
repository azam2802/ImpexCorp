import React from "react"
import BackgroungImage from "@images/Group 42.png"
import s from "@styles/pages/home/ApplicationForm.module.scss"

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
              type="text"
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
          </form>
          <button>Отправить</button>
        </div>
      </div>
    </div>
  )
}

export default ApplicationForm
