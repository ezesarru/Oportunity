import { create } from "zustand";

const useStore = create((set) => ({
  showContact: false,
  handleContact: (value) =>
    set((state) => ({
      showContact: value !== undefined ? value : !state.showContact,
    })),

  showAnimation: false,
  handleAnimation: (value) =>
    set((state) => ({
      showAnimation: value,
    })),
}));

export default useStore;
