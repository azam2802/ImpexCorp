import React from "react"
import s from "@styles/pages/Home/ApplicationForm.module.scss"

const ApplicationForm = () => {
  return (
    <section>
      <div className={s.container}>
        <div className={s.application_form}>
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
              placeholder="Какая машина вас интересует?"
              required
            />
            <button type="submit">Отправить</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ApplicationForm
