import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import s from "@styles/pages/Catalog/Catalog.module.scss"
import { Select } from "../Select/Select"
import { VolumeSelect } from "../Select/VolumeSelect"
import { useTranslation } from "react-i18next"
import { useFilterStore } from "@store/store"
import axios from "axios"
import { useFilter } from "@store/store"

export const FiltrModal = ({ setOpenModal }) => {
  const { values, getData } = useFilter()
  const { t } = useTranslation()
  const { setFilteredCars } = useFilterStore()
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768)

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 768)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      console.log(values)
      const queryParams = new URLSearchParams(values).toString()
      console.log(queryParams)
      const url = `${import.meta.env.VITE_API}/api/v1/autos/?${queryParams}`
      console.log(url)
      const response = await axios.get(url)
      setFilteredCars(response.data)
      console.log(response.data)
      setOpenModal(false)
    } catch (error) {
      console.log("Fetching error", error)
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    getData(value, name)
    console.log(value, name)
  }

  return (
    <main className={s.filter_modal}>
      <section className={s.row}>
        <Select
          title={t("Catalog.characteristics.catalog")}
          firstType="Mersedes"
          secondType="Audi"
          thirdType="Toyota"
          filterId="car_brand"
        />

        <Select
          title={t("Catalog.characteristics.model")}
          firstType="Mustang"
          secondType="Sonata"
          thirdType="Supra"
          filterId="car_model"
        />

        <Select
          title={t("Catalog.characteristics.yearIssue")}
          firstType="2010"
          secondType="2011"
          thirdType="2012"
          filterId="release_period"
        />
      </section>

      <section className={s.row}>
        <Select
          title={t("Catalog.characteristics.fuel.title")}
          firstType={t("Catalog.characteristics.fuel.diesel")}
          secondType={t("Catalog.characteristics.fuel.petrol")}
          thirdType={t("Catalog.characteristics.fuel.electro")}
          filterId="fuel_type"
        />
        <Select
          title={t("Catalog.characteristics.transmission.title")}
          firstType={t("Catalog.characteristics.transmission.mechanical")}
          secondType={t("Catalog.characteristics.transmission.automatic")}
          thirdType={t("Catalog.characteristics.transmission.stepless")}
          filterId="transmission"
        />

        <Select
          title={t("Catalog.characteristics.driveUnit.title")}
          firstType={t("Catalog.characteristics.driveUnit.front")}
          secondType={t("Catalog.characteristics.driveUnit.rear")}
          thirdType="4wd"
          filterId="drive"
        />
      </section>

      <section className={s.row}>
        <div className={s.row_input}>
          <input
            type="text"
            name="mileage_min"
            onChange={handleInputChange}
            placeholder={t("Catalog.input.mileageFrom")}
          />
          <input
            type="text"
            name="mileage_max"
            onChange={handleInputChange}
            placeholder={t("Catalog.input.mileageBefore")}
          />
        </div>

        <div className={s.adaptive_block}>
          {isSmallScreen ? (
            <div className={s.row_input}>
              <input
                type="text"
                name="price_min"
                onChange={handleInputChange}
                placeholder={t("Catalog.input.pricesFrom")}
              />
              <input
                type="text"
                name="price_max"
                onChange={handleInputChange}
                placeholder={t("Catalog.input.priceBefore")}
              />
            </div>
          ) : (
            <div className={s.block}>
              <div className={s.row_input}>
                <input
                  type="text"
                  name="price_min"
                  onChange={handleInputChange}
                  placeholder={t("Catalog.input.pricesFrom")}
                />
                <input
                  type="text"
                  name="price_max"
                  onChange={handleInputChange}
                  placeholder={t("Catalog.input.priceBefore")}
                />
              </div>
            </div>
          )}
        </div>

        <div className={s.row_input}>
          <VolumeSelect
            title={t("Catalog.input.volumeFrom")}
            firstType="2.2"
            secondType="2.2"
            thirdType="2.2"
            filterId="volume_min"
          />

          <VolumeSelect
            title={t("Catalog.input.volumeBefore")}
            firstType="2.2"
            secondType="2.2"
            thirdType="2.2"
            filterId="volume_max"
          />
        </div>
      </section>

      <div className={s.block}>
        <button onClick={onSubmit}>{t("Catalog.button.title")}</button>
      </div>
    </main>
  )
}

FiltrModal.propTypes = {
  setOpenModal: PropTypes.func.isRequired,
}

export default FiltrModal
