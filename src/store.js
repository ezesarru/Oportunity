import { create } from "zustand";

const useStore = create((set) => ({
  showContact: false,
  handleContact: (value) =>
    set((state) => ({
      showContact: value !== undefined ? value : !state.showContact,
    })),
}));

export default useStore;
