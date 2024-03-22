import { create } from "zustand"
import { devtools } from "zustand/middleware"

export const useLang = create(
  devtools((set) => ({
    lang: "",
    changeLang: (language) => set({ lang: language }),
  })),
)

const store = create(
  devtools((set) => ({
    isModalOpen: false,
    setIsModalOpen: (value) => set({ isModalOpen: value }),
  })),
)

export default store
