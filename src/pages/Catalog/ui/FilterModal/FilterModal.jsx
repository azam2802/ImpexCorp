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
  const { values, getData, setInitial } = useFilter()
  const { t, i18n } = useTranslation()
  const {
    setFilteredCars,
    brands,
    models,
    transmissions,
    drives,
    fetchData,
    fetchModels,
  } = useFilterStore()

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768)
  const [years, setYears] = useState([])
  const [volumes, setVolumes] = useState([])

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 768)
  }

  const headers = {
    "Content-Type": "application/json",
    "Accept-Language": i18n.language === "zh" ? "zh-hant" : i18n.language,
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    fetchData(i18n.language)
  }, [fetchData, i18n.language])

  useEffect(() => {
    const currentYear = new Date().getFullYear()
    const startYear = 1990
    const yearsArray = []
    const volumesArray = []

    for (let volume = 0.6; volume <= 9.9; ) {
      volume = 0.1 + volume
      volumesArray.push(volume.toFixed(1))
    }

    for (let year = startYear; year <= currentYear; year++) {
      yearsArray.push(year)
    }

    setYears(yearsArray)
    setVolumes(volumesArray)
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const queryParams = new URLSearchParams(values).toString()
      const url = `${import.meta.env.VITE_API}api/v1/autos/?${queryParams}`
      const response = await axios.get(url, { headers })
      if (response.data.length == 0) {
        setFilteredCars("empty")
      } else {
        setFilteredCars(response.data)
      }
      setInitial()
      setOpenModal(false)
    } catch (error) {
      console.log("Ошибка получения данных", error)
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    getData(value, name)
  }

  return (
    <main className={s.filter_modal}>
      <section className={s.row}>
        <Select
          title={t("Catalog.characteristics.catalog")}
          options={brands.map((brand) => ({
            label: brand.car_brand,
            value: brand.car_brand,
          }))}
          filterId="car_brand"
          onChange={(value) => {
            handleInputChange({ target: { name: "car_brand", value } })
            fetchModels(value)
          }}
        />

        <Select
          title={t("Catalog.characteristics.model")}
          options={models.map((model) => ({
            label: model.car_model,
            value: model.car_model,
          }))}
          filterId="car_model"
        />

        <Select
          title={t("Catalog.characteristics.yearIssue")}
          options={years.map((year) => ({
            label: year,
            value: year,
          }))}
          filterId="release_period"
        />
      </section>

      <section className={s.row}>
        <Select
          title={t("Catalog.characteristics.fuel.title")}
          options={[
            {
              label: t("Catalog.characteristics.fuel.diesel"),
              value: t("Catalog.characteristics.fuel.diesel"),
            },
            {
              label: t("Catalog.characteristics.fuel.petrol"),
              value: t("Catalog.characteristics.fuel.petrol"),
            },
            {
              label: t("Catalog.characteristics.fuel.electro"),
              value: t("Catalog.characteristics.fuel.electro"),
            },
            {
              label: t("Catalog.characteristics.fuel.hybrid"),
              value: t("Catalog.characteristics.fuel.hybrid"),
            },
          ]}
          filterId="fuel_type"
        />
        <Select
          title={t("Catalog.characteristics.transmission.title")}
          options={transmissions.map((transition) => ({
            label: transition.transmission,
            value: transition.transmission,
          }))}
          filterId="transmission"
        />

        <Select
          title={t("Catalog.characteristics.driveUnit.title")}
          options={drives.map((drive) => ({
            label: drive.drive,
            value: drive.drive,
          }))}
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
            volumes={volumes}
            filterId="volume_min"
          />

          <VolumeSelect
            title={t("Catalog.input.volumeBefore")}
            volumes={volumes}
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
