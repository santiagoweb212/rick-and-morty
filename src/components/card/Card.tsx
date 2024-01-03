import { Suspense, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useFavoriteStore from "../../store/useFaVoriteStore";
import Icons from "../ui/Icons";

interface ICardProps {
  image: string;
  title: string;
  status: string;
  gender: string;
  specie: string;
  id: number;
}
const Card = ({ image, title, status, gender, specie, id }: ICardProps) => {
  const { setFavorites, deleteFavorite, favorites } = useFavoriteStore();
  const [heartActive, setHeartActive] = useState(
    favorites.some((item) => item.id === id)
  );

  useEffect(() => {
    setHeartActive(favorites.some((item) => item.id === id));
    console.log("aca favorites");
  }, [favorites]);

  const toggleFavorite = () => {
    const isFavorite = favorites.some((item) => item.id === id);
    console.log(isFavorite);
    if (isFavorite) {
      deleteFavorite(id);
      setHeartActive(false);

      return;
    } else {
      setFavorites({ id, image, title, gender, specie, status });
      setHeartActive(true);
    }
  };

  return (
    <article className="card card--shadown  group ">
      <Suspense fallback={<div>Loading...</div>}>
        <img src={image} className="w-full h-[180px]  object-cover " />

        <h2 className=" card_title">{title}</h2>
        <div className=" flex flex-col gap-1">
          <div className=" flex gap-1">
            <Icons
              icon="iconStatus"
              className={
                status === "Alive"
                  ? "text-green-600"
                  : status === "Dead"
                  ? "text-red-600"
                  : "text-gray-600"
              }
            />
            <h3 className="font-medium">estado:</h3>
            <p className="font-medium">{status}</p>
          </div>
          <div className="flex gap-1">
            <Icons
              icon="iconGender"
              className={
                gender === "Female"
                  ? "text-pink-500"
                  : gender === "Male"
                  ? "text-blue-500"
                  : "text-gray-700"
              }
            />
            <h3 className="font-medium">genero:</h3>
            <p className="font-medium">{gender}</p>
          </div>
          <div className="flex gap-1">
            <Icons icon="iconSpecie" className="" />
            <h3 className="font-medium">especie:</h3>
            <p className="font-medium">{specie}</p>
          </div>
        </div>
        
        <div
          className={`absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-amber-500 top-0 right-0 m-2 p-1 bg-white rounded-full cursor-pointer ${
            heartActive ? "opacity-100" : ""
          }`}
          onClick={() => {
            toggleFavorite();
          }}
        >
          <Icons
            icon="iconHear"
            className={
              heartActive ? "text-red-600 fill-red-600" : "text-gray-500"
            }
          />
        </div>
      </Suspense>
    </article>
  );
};

export default Card;
