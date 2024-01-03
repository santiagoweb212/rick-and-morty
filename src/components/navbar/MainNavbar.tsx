import { NavLink } from "react-router-dom";
import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import Favorites from "../favorites/Favorites";
import useFavoriteStore from "../../store/useFaVoriteStore";

const MainNavbar = () => {
  const [isVisbleFavorite, setIsVisibleFavorite] = useState(true);
  const { favorites } = useFavoriteStore();
  const handleFavoriteClick = () => {
    setIsVisibleFavorite(!isVisbleFavorite);
  };
  return (
    <div className="h-14 relative w-full flex justify-between items-center py-2 navbar-bg-gradient">
      <Logo />
      <div className="flex gap-4 items-center">
        <SearchBar />
        <nav className="flex gap-2 text-[#6B6A6A] font-medium">
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          >
            characters
          </NavLink>
          
          <div className="relative">
            <button onClick={handleFavoriteClick}>favorites</button>
            <div className="absolute bottom-[calc(100%-0.5rem)] px-2 transform translate-x-1/2 bg-blue-500 rounded-lg text-center text-pretty text-sm text-white">
              {favorites.length}
            </div>
          </div>
        </nav>
      </div>
      <Favorites
        isVisible={isVisbleFavorite}
        closeModal={handleFavoriteClick}
      />
    </div>
  );
};

export default MainNavbar;
