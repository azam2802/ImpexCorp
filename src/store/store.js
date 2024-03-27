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

export const useAutosList = create(
  devtools((set) => ({
    data: [],
    fetchData: (lang) => {
      try {
        useEffect(() => {
          axios
            .get(
              `http://34.159.107.65/${lang == "zh" ? "zh-hant" : lang}/api/auto/`,
              {
                headers: {
                  "Content-Type": "application/json",
                  "Accept-Language": lang == "zh" ? "zh-hant" : lang,
                },
              },
            )
            .then((res) => {
              set({ data: res.data.results })
            })
        }, [lang])
      } catch {
        return
      }
    },
  })),
)
