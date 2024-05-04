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
            .get(import.meta.env.VITE_API_AUTO_LIST, {
              headers: {
                "Content-Type": "application/json",
                "Accept-Language": lang == "zh" ? "zh-hant" : lang,
              },
            })
            .then((res) => {
              set({ data: [...res.data].reverse() })
              console.log(res.data)
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
    fetchData: (lang, car_slug) => {
      try {
        useEffect(() => {
          axios
            .get(import.meta.env.VITE_API_AUTO_LIST + car_slug, {
              headers: {
                "Content-Type": "application/json",
                "Accept-Language": lang == "zh" ? "zh-hant" : lang,
              },
            })
            .then((res) => {
              set({ data: res.data })
              console.log(res.data)
            })
        }, [lang])
      } catch {
        return
      }
    },
  })),
)
