import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import s from "@styles/pages/Catalog/Catalog.module.scss"
import { Select } from "../Select/Select"
import { VolumeSelect } from "../Select/VolumeSelect"
import { useTranslation } from "react-i18next"
import { useFilterStore } from "@store/store"
import axios from "axios"

export const FiltrModal = ({ setOpenModal, setFilteredCars }) => {
  const { t } = useTranslation()
  const { selectedFilters, setSelectedFilters, cars, setCars } =
    useFilterStore()
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(selectedFilters)
        const response = await axios.get("http://34.159.206.220/api/auto/", {
          params: selectedFilters,
        })
        setCars(response.data)

        console.log(response.data) // Вывод данных до фильтрации

        // Применяем фильтры к данным
        const filteredData = response.data.filter((car) => {
          // Проверяем, соответствует ли каждая машина всем выбранным фильтрам
          return Object.keys(selectedFilters).every((key) => {
            // Проверяем, соответствует ли свойство машины выбранному значению фильтра
            return car[key] === selectedFilters[key]
          })
        })

        // Устанавливаем отфильтрованные данные
        setFilteredCars(filteredData)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [selectedFilters])

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

    setFilteredCars(cars)
  }

  return (
    <main className={s.filter_modal}>
      <section className={s.row}>
        <Select
          title={t("Catalog.characteristics.catalog")}
          firstType="Mersedes"
          secondType="Audi"
          thirdType="Toyota"
          onSelect={(value) =>
            setSelectedFilters((prevFilters) => ({
              ...prevFilters,
              catalog: value,
            }))
          }
        />

        <Select
          title={t("Catalog.characteristics.model")}
          firstType="Solares"
          secondType="Sonata"
          thirdType="Supra"
          onSelect={(value) =>
            setSelectedFilters((prevFilters) => ({
              ...prevFilters,
              model: value,
            }))
          }
        />

        <Select
          title={t("Catalog.characteristics.yearIssue")}
          firstType="2010"
          secondType="2011"
          thirdType="2012"
          onSelect={(value) =>
            setSelectedFilters((prevFilters) => ({
              ...prevFilters,
              yearIssue: value,
            }))
          }
        />
      </section>

      <section className={s.row}>
        <Select
          title={t("Catalog.characteristics.wheel.title")}
          firstType={t("Catalog.characteristics.wheel.right")}
          secondType={t("Catalog.characteristics.wheel.left")}
          onSelect={(value) =>
            setSelectedFilters((prevFilters) => ({
              ...prevFilters,
              wheel: value,
            }))
          }
        />

        <Select
          title={t("Catalog.characteristics.fuel.title")}
          firstType={t("Catalog.characteristics.fuel.diesel")}
          secondType={t("Catalog.characteristics.fuel.petrol")}
          thirdType={t("Catalog.characteristics.fuel.electro")}
          onSelect={(value) =>
            setSelectedFilters((prevFilters) => ({
              ...prevFilters,
              fuelType: value,
            }))
          }
        />

        <Select
          title={t("Catalog.characteristics.driveUnit.title")}
          firstType={t("Catalog.characteristics.driveUnit.front")}
          secondType={t("Catalog.characteristics.driveUnit.rear")}
          thirdType="4wd"
          onSelect={(value) =>
            setSelectedFilters((prevFilters) => ({
              ...prevFilters,
              driveUnit: value,
            }))
          }
        />

        <div className={s.adaptive_none}>
          <Select
            title={t("Catalog.characteristics.transmission.title")}
            firstType={t("Catalog.characteristics.transmission.mechanical")}
            secondType={t("Catalog.characteristics.transmission.automatic")}
            thirdType={t("Catalog.characteristics.transmission.stepless")}
            onSelect={(value) =>
              setSelectedFilters((prevFilters) => ({
                ...prevFilters,
                transmission: value,
              }))
            }
          />
        </div>
      </section>

      <section className={s.row}>
        <div className={s.row_input}>
          <input type="text" placeholder={t("Catalog.input.mileageFrom")} />
          <input type="text" placeholder={t("Catalog.input.mileageBefore")} />
        </div>

        <div className={s.adaptive_block}>
          <Select
            title={t("Catalog.characteristics.transmission.title")}
            firstType={t("Catalog.characteristics.transmission.mechanical")}
            secondType={t("Catalog.characteristics.transmission.automatic")}
            thirdType={t("Catalog.characteristics.transmission.stepless")}
            onSelect={(value) =>
              setSelectedFilters((prevFilters) => ({
                ...prevFilters,
                transmission: value,
              }))
            }
          />
        </div>

        <div className={s.row_input}>
          <VolumeSelect
            title={t("Catalog.input.volumeFrom")}
            firstType="2.2"
            secondType="2.2"
            thirdType="2.2"
            onSelect={(value) =>
              setSelectedFilters((prevFilters) => ({
                ...prevFilters,
                volumeFrom: value,
              }))
            }
          />

          <VolumeSelect
            title={t("Catalog.input.volumeBefore")}
            firstType="2.2"
            secondType="2.2"
            thirdType="2.2"
            onSelect={(value) =>
              setSelectedFilters((prevFilters) => ({
                ...prevFilters,
                volumeBefore: value,
              }))
            }
          />
        </div>
      </section>

      {isSmallScreen ? (
        <div className={s.row_input}>
          <input type="text" placeholder={t("Catalog.input.pricesFrom")} />
          <input type="text" placeholder={t("Catalog.input.priceBegore")} />
        </div>
      ) : (
        <div className={s.block}>
          <div className={s.row_input}>
            <input type="text" placeholder={t("Catalog.input.pricesFrom")} />
            <input type="text" placeholder={t("Catalog.input.priceBegore")} />
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
  setFilteredCars: PropTypes.func.isRequired,
}
