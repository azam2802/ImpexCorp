import create from "zustand"

const useModalState = create((set) => ({
  isModalOpen: false,
  setIsModalOpen: (value) => set({ isModalOpen: value }),
}))

export default useModalState
