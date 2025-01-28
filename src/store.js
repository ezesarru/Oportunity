import { create } from "zustand";

const useStore = create((set) => ({
  showContact: false,
  handleContact: () => set((state) => ({ showContact: !state.showContact })),
}));

export default useStore;
