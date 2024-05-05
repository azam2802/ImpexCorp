import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import s from "@styles/pages/Catalog/Catalog.module.scss"
import { Select } from "../Select/Select"
import { VolumeSelect } from "../Select/VolumeSelect"
import { useTranslation } from "react-i18next"
import { useFilterStore } from "@store/store"
import axios from "axios"

export const FiltrModal = ({ setOpenModal }) => {
  const { t } = useTranslation()
  const { selectedFilters, setSelectedFilters, filteredCars, setFilteredCars } =
    useFilterStore()

  console.log(selectedFilters)
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(selectedFilters)
        const queryParams = new URLSearchParams(selectedFilters).toString()
        console.log(queryParams)
        const url = `${import.meta.env.VITE_API_AUTO_LIST}?${queryParams}`
        const response = await axios.get(url)
        setFilteredCars(response.data)
        console.log(response.data)
      } catch (error) {
        console.log("Fetching error", error)
      }
    }
    fetchData()
  }, [selectedFilters])
  console.log(filteredCars)

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

  const onSubmit = (e) => {
    e.preventDefault()
    setOpenModal(false)
    console.log(filteredCars)
    setFilteredCars()
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    console.log(selectedFilters)
    console.log(event)
    console.log(name, value)
    setSelectedFilters({
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
          onSelect={(event) => handleInputChange(event)}
        />

        <Select
          title={t("Catalog.characteristics.yearIssue")}
          firstType="2010"
          secondType="2011"
          thirdType="2012"
          onSelect={(event) => handleInputChange(event)}
        />
      </section>

      <section className={s.row}>
        <Select
          title={t("Catalog.characteristics.wheel.title")}
          firstType={t("Catalog.characteristics.wheel.right")}
          secondType={t("Catalog.characteristics.wheel.left")}
          onSelect={(event) => handleInputChange(event)}
        />

        <Select
          title={t("Catalog.characteristics.fuel.title")}
          firstType={t("Catalog.characteristics.fuel.diesel")}
          secondType={t("Catalog.characteristics.fuel.petrol")}
          thirdType={t("Catalog.characteristics.fuel.electro")}
          onSelect={(event) => handleInputChange(event)}
        />

        <Select
          title={t("Catalog.characteristics.driveUnit.title")}
          firstType={t("Catalog.characteristics.driveUnit.front")}
          secondType={t("Catalog.characteristics.driveUnit.rear")}
          thirdType="4wd"
          onSelect={(event) => handleInputChange(event)}
        />

        <div className={s.adaptive_none}>
          <Select
            title={t("Catalog.characteristics.transmission.title")}
            firstType={t("Catalog.characteristics.transmission.mechanical")}
            secondType={t("Catalog.characteristics.transmission.automatic")}
            thirdType={t("Catalog.characteristics.transmission.stepless")}
            onSelect={(event) => handleInputChange(event)}
          />
        </div>
      </section>

      <section className={s.row}>
        <div className={s.row_input}>
          <input
            type="text"
            name="mileage"
            placeholder={t("Catalog.input.mileageFrom")}
            onChange={(event) => handleInputChange(event)}
          />

          <input
            type="text"
            placeholder={t("Catalog.input.mileageBefore")}
            onChange={(event) => handleInputChange(event)}
          />
        </div>

        <div className={s.adaptive_block}>
          <Select
            title={t("Catalog.characteristics.transmission.title")}
            firstType={t("Catalog.characteristics.transmission.mechanical")}
            secondType={t("Catalog.characteristics.transmission.automatic")}
            thirdType={t("Catalog.characteristics.transmission.stepless")}
            onSelect={(event) => handleInputChange(event)}
          />
        </div>

        <div className={s.row_input}>
          <VolumeSelect
            title={t("Catalog.input.volumeFrom")}
            firstType="2.2"
            secondType="2.2"
            thirdType="2.2"
            onSelect={(event) => handleInputChange(event)}
          />

          <VolumeSelect
            title={t("Catalog.input.volumeBefore")}
            firstType="2.2"
            secondType="2.2"
            thirdType="2.2"
            onSelect={(event) => handleInputChange(event)}
          />
        </div>
      </section>

      {isSmallScreen ? (
        <div className={s.row_input}>
          <input
            type="text"
            placeholder={t("Catalog.input.pricesFrom")}
            onChange={(event) => handleInputChange(event)}
          />
          <input
            type="text"
            placeholder={t("Catalog.input.priceBegore")}
            onChange={(event) => handleInputChange(event)}
          />
        </div>
      ) : (
        <div className={s.block}>
          <div className={s.row_input}>
            <input
              type="text"
              placeholder={t("Catalog.input.pricesFrom")}
              onChange={(event) => handleInputChange(event)}
            />
            <input
              type="text"
              placeholder={t("Catalog.input.priceBegore")}
              onChange={(event) => handleInputChange(event)}
            />
          </div>
        </div>
      )}

      <div className={s.block}>
        <button onClick={onSubmit}>{t("Catalog.button.title")}</button>
      </div>
    </main>
  )
}

FiltrModal.propTypes = {
  setOpenModal: PropTypes.func.isRequired,
}
