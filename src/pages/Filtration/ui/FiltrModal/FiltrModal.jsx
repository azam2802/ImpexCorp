import React from "react"
import PropTypes from "prop-types"
import s from "@styles/pages/Filtration/FiltrationPage.module.scss"
import { Select } from "../Select/Select"
import { VolumeSelect } from "../Select/VolumeSelect"

export const FiltrModal = ({ setOpenModal }) => {
  const onSubmit = (e) => {
    e.preventDefault()
    setOpenModal(false)
  }

  return (
    <main className={s["filter-modal"]}>
      <section className={s["row"]}>
        <Select
          title="Марка"
          firstType="Mersedes"
          secondType="Audi"
          thirdType="Toyota"
        />

        <Select
          title="Модель"
          firstType="Solares"
          secondType="Sonata"
          thirdType="Supra"
        />

        <Select
          title="Год выпуска"
          firstType="2010"
          secondType="2011"
          thirdType="2012"
        />
      </section>

      <section className={s["row"]}>
        <Select title="Руль" firstType="Слева" secondType="Справа" />

        <Select
          title="Топливо"
          firstType="Дизель"
          secondType="Бензин"
          thirdType="Электро"
        />

        <Select
          title="Привод"
          firstType="Передний"
          secondType="Задний"
          thirdType="4wd"
        />

        <div className={s["adaptive-none"]}>
          <Select
            title="Трансмиссия"
            firstType="Механические"
            secondType="Автоматические"
            thirdType="Бесступенчатые"
          />
        </div>
      </section>

      <section className={s["row"]}>
        <div className={s["row-input"]}>
          <input type="text" placeholder="Пробег от" />
          <input type="text" placeholder="Пробег до" />
        </div>

        <div className={s["adaptive-block"]}>
          <Select
            title="Трансмиссия"
            firstType="Механические"
            secondType="Автоматические"
            thirdType="Бесступенчатые"
          />
        </div>

        <div className={s["row-input"]}>
          <VolumeSelect
            title="Обьем от"
            firstType="2.2"
            secondType="2.2"
            thirdType="2.2"
          />

          <VolumeSelect
            title="Обьем до"
            firstType="2.2"
            secondType="2.2"
            thirdType="2.2"
          />
        </div>
      </section>

      <div className={s["block"]}>
        <div className={s["row-input"]}>
          <input type="text" placeholder="Цены от" />
          <input type="text" placeholder="Цены до" />
        </div>

        <button onClick={onSubmit}>Найти</button>
      </div>
    </main>
  )
}

FiltrModal.propTypes = {
  setOpenModal: PropTypes.string.isRequired,
}
