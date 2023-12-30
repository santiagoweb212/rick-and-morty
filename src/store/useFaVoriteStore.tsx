import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
interface ICharacter{
  id:number, image:string, title:string, gender:string, specie:string, status:string
}
interface IFavoriteStore {
  favorites: Array<ICharacter>;
  setFavorites: (characterFavorite: ICharacter) => void;
  deleteFavorite: (favoriteId: number) => void;
}
const useFavoriteStore = create<IFavoriteStore>()(
  persist(
    devtools((set) => ({
      favorites: [],
      setFavorites: (favoriteId) =>
        set((state) => ({
          ...state,
          favorites: [...state.favorites, favoriteId],
        })),
      deleteFavorite: (favoriteId) =>
        set((state) => ({
          ...state,
          favorites: state.favorites.filter(({id}) => id !== favoriteId),
        })),
    })),
    { name: "favoriteStore" }
  )
);

export default useFavoriteStore;
