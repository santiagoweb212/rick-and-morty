import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ILocations } from "../types/location.types";
interface ILocationStore {
  locations: ILocations;
  filters: {
    name: string;
    type: string;
    dimension: string;
  };
  setFilters: (filters: string, value: string) => void;
  setLocations: (locations: ILocations) => void;
}
const useLocationStore = create<ILocationStore>()(
  devtools((set) => ({
    locations: {
      info: { count: 0, pages: 0, next: "", prev: null },
      results: [],
    },
    filters: {
      name: "",
      type: "",
      dimension: "",
    },

    setFilters: (filters, value) =>
      set((state) => ({
        ...state,
        filters: {
          ...state.filters,
          [filters]: value,
        },
      })),

    setLocations: (locations) =>
      set((state) => ({
        ...state,
        locations,
      })),
  }))
);
export default useLocationStore;
