import { create } from "zustand";
import { devtools } from "zustand/middleware";
interface IPageNumberStore {
  currentPage: number;
  setCurrentPage: (page: number) => void;
}
const usePageNumberStore = create<IPageNumberStore>()(devtools((set) => ({
  currentPage: 1,
  setCurrentPage: (page: number) => set({ currentPage: page }),
})));

export default usePageNumberStore;
