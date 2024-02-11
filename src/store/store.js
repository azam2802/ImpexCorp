import { create } from "zustand";

export const useLang = create((set) => ({
    lang: 'ru',
    changeLang: (lang) => set(() => ({lang: lang}))
}))