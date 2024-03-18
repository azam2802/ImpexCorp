import { create } from "zustand"
import { devtools } from "zustand/middleware"

export const useLang = create(
  devtools((set) => ({
    lang: "",
    changeLang: (language) => set({ lang: language }),
  })),
)
