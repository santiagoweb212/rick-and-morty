import useFavoriteStore from "../../store/useFaVoriteStore";
import Button from "../ui/Button";

interface IFavoritesProps {
  isVisible: boolean;
  closeModal: () => void;
}
const Favorites = ({ isVisible, closeModal }: IFavoritesProps) => {
  const { favorites,deleteFavorite } = useFavoriteStore();

  return (
    <div
      className={`${
        isVisible
          ? "hidden"
          : "fixed min-w-64 z-40 top-0 right-0 h-screen bg- bg-[#f9f9f9] p-2"
      }`}
    >
      <div className="flex justify-end">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 hover:bg-red-400 rounded-full cursor-pointer"
          onClick={() => closeModal()}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>
      <h1 className="font-bold text-pretty">Favorites:</h1>

      <section>
        <div className=" flex flex-col gap-2">
          {favorites?.map((character) => (
            <div
              key={character.id}
              className="flex hover:shadow-md p-1 items-center border bg-slate-50 mx-2 rounded-lg"
            >
              <img
                src={character.image}
                alt=""
                className="size-8 rounded-full"
              />
              <h2 className="text-pretty">{character.title}</h2>
              <Button
                iconRight={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5 text-red-500"
                    onClick={() => deleteFavorite(character.id)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                }
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Favorites;
