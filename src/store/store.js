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
            .get(import.meta.env.VITE_API_AUTO_LIST, {
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

export const useFilterStore = create(
  devtools((set) => ({
    selectedFilters: {},
    filteredCars: [],
    setSelectedFilters: (newFilters) =>
      set((state) => ({
        ...state,
        selectedFilters: { ...state.selectedFilters, ...newFilters },
      })),
    setFilteredCars: (filteredCars) => set({ filteredCars }),
  })),
)
