import { NavLink } from "react-router-dom";
import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import Favorites from "../favorites/Favorites";
import useFavoriteStore from "../../store/useFaVoriteStore";

const MainNavbar = () => {
  const [isVisibleFavorite, setIsVisibleFavorite] = useState(true);
  const [isVisibleNav, setIsVisibleNav] = useState(false);
  const { favorites } = useFavoriteStore();
  const handleFavoriteClick = () => {
    setIsVisibleFavorite(!isVisibleFavorite);
  };
  const handleOpenNav = () => {
    setIsVisibleNav(!isVisibleNav);
  };
  return (
    <div className="sticky top-0 h-14 shadow  w-full flex justify-between items-center py-2 bg-white z-50 ">
      <Logo />
      <div className={`${!isVisibleNav ? "hidden" : ""} shadow-md md:shadow-none absolute md:static left-0  top-14 bg-white  md:flex gap-4 items-center `}>
        <nav className={` flex flex-col     md:flex-row p-2  gap-4 text-[#6B6A6A] font-medium`}>
          <SearchBar />
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          >
            characters
          </NavLink>

          <div className="relative">
            <button onClick={handleFavoriteClick} className="hover:text-blue-400 ">favorites</button>
            <div className="absolute bottom-[calc(100%-0.5rem)] px-2 transform translate-x-1/2 bg-blue-500 rounded-lg text-center text-pretty text-sm text-white">
              {favorites.length}
            </div>
          </div>
        </nav>
      </div>
      <Favorites
        isVisible={isVisibleFavorite}
        closeModal={handleFavoriteClick}
      />
      <button onClick={handleOpenNav} className="md:hidden hover:text-blue-400">
        {isVisibleNav ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default MainNavbar;
