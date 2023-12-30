import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ICharacters } from "../types/characters.types";
interface ICharactersStore {
  characters: ICharacters;
  filters: {
    status: string;
    gender: string;
    specie: string;
    name: string;
  };
  setFilters: (filters: string, value: string) => void;
  setCharacters: (characters: ICharacters) => void;
}
const useCharactersStore = create<ICharactersStore>()(
  devtools((set) => ({
    characters: {info: {count: 0, pages: 0, next: "", prev: null}, results: []},
    filters: {
      status: "All",
      gender: "All",
      specie: "All",
      name: "",
    },
    setFilters: (filters, value) =>
      set((state) => ({
        ...state,
        filters: {
          ...state.filters,
          [filters]: value,
        },
      })),
    setCharacters: (characters) => set((state) => ({ ...state, characters })),
  }))
);

export default useCharactersStore;
