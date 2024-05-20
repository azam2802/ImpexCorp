import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import s from "@styles/pages/Catalog/Catalog.module.scss"
import { Select } from "../Select/Select"
import { VolumeSelect } from "../Select/VolumeSelect"
import { useTranslation } from "react-i18next"
import { filterFunc } from "@store/store"

export const FiltrModal = ({ setOpenModal }) => {
  const { t } = useTranslation()

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

  const { values } = filterFunc()
  const onSubmit = (e) => {
    e.preventDefault()
    setOpenModal(false)
    console.log(values)
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
          firstType="Solares"
          secondType="Sonata"
          thirdType="Supra"
          filterId="car_model"
        />

        <Select
          title={t("Catalog.characteristics.yearIssue")}
          firstType="2010"
          secondType="2011"
          thirdType="2012"
          filterId="year"
        />
      </section>

      <section className={s.row}>
        {/* <Select
          title={t("Catalog.characteristics.wheel.title")}
          firstType={t("Catalog.characteristics.wheel.right")}
          secondType={t("Catalog.characteristics.wheel.left")}
        /> */}

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

        <div className={s.adaptive_none}>
          <Select
            title={t("Catalog.characteristics.transmission.title")}
            firstType={t("Catalog.characteristics.transmission.mechanical")}
            secondType={t("Catalog.characteristics.transmission.automatic")}
            thirdType={t("Catalog.characteristics.transmission.stepless")}
            filterId="transmission"
          />
        </div>
      </section>

      <section className={s.row}>
        <div className={s.row_input}>
          <input
            type="text"
            onChange={(e) => {
              values.milage_min = Number(e.target.value)
            }}
            placeholder={t("Catalog.input.mileageFrom")}
          />
          <input
            onChange={(e) => {
              values.milage_max = Number(e.target.value)
            }}
            type="text"
            placeholder={t("Catalog.input.mileageBefore")}
          />
        </div>

        <div className={s.adaptive_block}>
          {isSmallScreen ? (
            <div className={s.row_input}>
              <input
                type="text"
                onChange={(e) => {
                  values.price_min = Number(e.target.value)
                }}
                placeholder={t("Catalog.input.pricesFrom")}
              />
              <input
                type="text"
                onChange={(e) => {
                  values.price_max = Number(e.target.value)
                }}
                placeholder={t("Catalog.input.priceBefore")}
              />
            </div>
          ) : (
            <div className={s.block}>
              <div className={s.row_input}>
                <input
                  onChange={(e) => {
                    values.price_min = Number(e.target.value)
                  }}
                  type="text"
                  placeholder={t("Catalog.input.pricesFrom")}
                />
                <input
                  onChange={(e) => {
                    values.price_max = Number(e.target.value)
                  }}
                  type="text"
                  placeholder={t("Catalog.input.priceBegore")}
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
            filterId="volume_max"
          />

          <VolumeSelect
            title={t("Catalog.input.volumeBefore")}
            firstType="2.2"
            secondType="2.2"
            thirdType="2.2"
            filterId="volume_min"
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
