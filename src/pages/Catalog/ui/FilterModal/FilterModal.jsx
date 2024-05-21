import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import s from "@styles/pages/Catalog/Catalog.module.scss"
import { Select } from "../Select/Select"
import { VolumeSelect } from "../Select/VolumeSelect"
import { useTranslation } from "react-i18next"
import { useFilterStore } from "@store/store"
import axios from "axios"

export const FiltrModal = ({ setOpenModal }) => {
  const { t } = useTranslation()
  const { selectedFilters, setSelectedFilters, setFilteredCars } =
    useFilterStore()
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
      const queryParams = new URLSearchParams(selectedFilters).toString()
      const url = `${import.meta.env.VITE_API_AUTO_LIST}?${queryParams}`
      const response = await axios.get(url)
      setFilteredCars(response.data)
      setOpenModal(false)
    } catch (error) {
      console.log("Fetching error", error)
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setSelectedFilters({
      ...selectedFilters,
      [name]: value,
    })
  }

  return (
    <main className={s.filter_modal}>
      <section className={s.row}>
        <Select
          title={t("Catalog.characteristics.catalog")}
          firstType="Mersedes"
          secondType="Audi"
          thirdType="Toyota"
          onSelect={(event) => handleInputChange(event)}
        />

        <Select
          title={t("Catalog.characteristics.model")}
          firstType="Solares"
          secondType="Sonata"
          thirdType="Supra"
        />

        <Select
          title={t("Catalog.characteristics.yearIssue")}
          firstType="2010"
          secondType="2011"
          thirdType="2012"
        />
      </section>

      <section className={s.row}>
        <Select
          title={t("Catalog.characteristics.fuel.title")}
          firstType={t("Catalog.characteristics.fuel.diesel")}
          secondType={t("Catalog.characteristics.fuel.petrol")}
          thirdType={t("Catalog.characteristics.fuel.electro")}
        />
        <Select
          title={t("Catalog.characteristics.transmission.title")}
          firstType={t("Catalog.characteristics.transmission.mechanical")}
          secondType={t("Catalog.characteristics.transmission.automatic")}
          thirdType={t("Catalog.characteristics.transmission.stepless")}
        />

        <Select
          title={t("Catalog.characteristics.driveUnit.title")}
          firstType={t("Catalog.characteristics.driveUnit.front")}
          secondType={t("Catalog.characteristics.driveUnit.rear")}
          thirdType="4wd"
        />

        <div className={s.adaptive_none}>
          <Select
            title={t("Catalog.characteristics.transmission.title")}
            firstType={t("Catalog.characteristics.transmission.mechanical")}
            secondType={t("Catalog.characteristics.transmission.automatic")}
            thirdType={t("Catalog.characteristics.transmission.stepless")}
          />
        </div>
      </section>

      <section className={s.row}>
        <div className={s.row_input}>
          <input
            type="text"
            placeholder={t("Catalog.input.mileageFrom")}
            onChange={(event) => handleInputChange(event)}
            name="mileage_min"
          />
          <input
            type="text"
            placeholder={t("Catalog.input.mileageBefore")}
            onChange={(event) => handleInputChange(event)}
            name="mileage_max"
          />
        </div>

        <div className={s.adaptive_block}>
          {isSmallScreen ? (
            <div className={s.row_input}>
              <input type="text" placeholder={t("Catalog.input.pricesFrom")} />
              <input
                type="text"
                placeholder={t("Catalog.input.priceBegore")}
                onChange={(event) => handleInputChange(event)}
                name="priceBegore"
              />
            </div>
          ) : (
            <div className={s.block}>
              <div className={s.row_input}>
                <input
                  type="text"
                  placeholder={t("Catalog.input.pricesFrom")}
                  onChange={(event) => handleInputChange(event)}
                  name="pricesFrom"
                />
                <input
                  type="text"
                  placeholder={t("Catalog.input.priceBegore")}
                  onChange={(event) => handleInputChange(event)}
                  name="priceBegore"
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
          />

          <VolumeSelect
            title={t("Catalog.input.volumeBefore")}
            firstType="2.2"
            secondType="2.2"
            thirdType="2.2"
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
