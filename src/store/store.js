import { create } from "zustand"
import { devtools } from "zustand/middleware"

export const useLang = create(
  devtools((set) => ({
    lang: "",
    changeLang: (language) => set({ lang: language }),
  })),
)

export const useModalState = create(
  devtools((set) => ({
    isModalOpen: false,
    setIsModalOpen: (value) => set({ isModalOpen: value }),
  })),
)
