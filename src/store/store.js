import { create } from "zustand"

export const useLang = create((set) => ({
  lang: "",
  changeLang: (language) => set({ lang: language }),
}))
