import axios from "axios"
import { useEffect } from "react"
import { create } from "zustand"
import { devtools } from "zustand/middleware"

export const useModalState = create(
  devtools((set) => ({
    isModalOpen: false,
    setIsModalOpen: (value) => set({ isModalOpen: value }),
  })),
)

export const useSliderState = create(
  devtools((set) => ({
    slide: 0,
    nextSlide: () => set((state) => ({ slide: state.slide + 1 })),
    prevSlide: () => set((state) => ({ slide: state.slide - 1 })),
    setSlide: (value) => set({ slide: value }),
  })),
)

export const useBurgerState = create(
  devtools((set) => ({
    menuActive: false,
    setMenuActive: (value) => set({ menuActive: value }),
  })),
)

export const useAutosList = create(
  devtools((set) => ({
    data: [],
    fetchData: (lang) => {
      try {
        useEffect(() => {
          axios
            .get(import.meta.env.VITE_API + "api/v1/autos", {
              headers: {
                "Content-Type": "application/json",
                "Accept-Language": lang == "zh" ? "zh-hant" : lang,
              },
            })
            .then((res) => {
              set({ data: [...res.data].reverse() })
            })
        }, [lang])
      } catch {
        return
      }
    },
  })),
)

export const useAutoInfo = create(
  devtools((set) => ({
    data: [],
    fetchData: (lang, id) => {
      try {
        useEffect(() => {
          axios
            .get(import.meta.env.VITE_API + "api/v1/autos/" + id, {
              headers: {
                "Content-Type": "application/json",
                "Accept-Language": lang == "zh" ? "zh-hant" : lang,
              },
            })
            .then((res) => {
              set({ data: res.data })
            })
        }, [lang])
      } catch {
        return
      }
    },
  })),
)

export const useFilterStore = create(
  devtools((set) => ({
    filteredCars: [],
    brands: [],
    models: [],
    setFilteredCars: (filteredCars) => set({ filteredCars }),
    fetchData: async (lang) => {
      try {
        const headers = {
          "Content-Type": "application/json",
          "Accept-Language": lang === "zh" ? "zh-hant" : lang,
        }

        const [brandsResponse, modelsResponse] = await Promise.all([
          axios.get(`${import.meta.env.VITE_API}api/v1/car-brands`, {
            headers,
          }),
          axios.get(`${import.meta.env.VITE_API}api/v1/car-models`, {
            headers,
          }),
        ])

        set({
          brands: brandsResponse.data,
          models: modelsResponse.data,
        })
      } catch (error) {
        console.error("Ошибка получения данных", error)
      }
    },
    fetchModels: async (brand) => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API}api/v1/car-models/${brand}`,
        )
        set({ models: response.data })
      } catch (error) {
        console.error("Ошибка при загрузке моделей", error)
      }
    },
  })),
)

export const useFilter = create(
  devtools((set) => ({
    values: {
      car_brand: "",
      car_model: "",
      fuel_type: "",
      mileage_max: 99999999999999,
      mileage_min: 0,
      price_min: 0,
      price_max: 99999999999,
      release_period: "",
      transmission: "",
      drive: "",
      country: "",
      volume_max: 99999999999,
      volume_min: 0,
    },
    getData: (clickedItem, filterId) => {
      set((state) => {
        const newValues = { ...state.values }
        newValues[filterId] = clickedItem
        return { values: newValues }
      })
    },
    setInitial: () => {
      set(() => ({
        values: {
          car_brand: "",
          car_model: "",
          fuel_type: "",
          mileage_max: 99999999999999,
          mileage_min: 0,
          price_min: 0,
          price_max: 999999999999,
          release_period: "",
          transmission: "",
          drive: "",
          country: "",
          volume_max: 99999999999,
          volume_min: 0,
        },
      }))
    },
  })),
)
