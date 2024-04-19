import ChipsFilters from "../../components/chipsFilter/ChipsFilters";
import Filters from "../../components/filters/Filters";
import Pagination from "../../components/pagination/Pagination";
import Loader from "../../components/ui/Loader";
import usePageNumberStore from "../../store/usePageNumberStore";
import Characters from "./components/Characters";
import useCharacterData from "./hooks/useCharacterData";

const Home = () => {
  const { isError, isFetching, characters } = useCharacterData();
  const { currentPage, setCurrentPage } = usePageNumberStore();

  return (
    <div className="">
      <div className="sticky top-14 z-40 shadow bg-white px-1">
      <Filters />
      <ChipsFilters />
      <Pagination
        currentPage={currentPage}
        totalPages={characters?.info?.pages}
        setCurrentPage={setCurrentPage}
      />
      </div>
      {isError && (
        <div className="w-full h-[calc(100vh-12.5rem)]  flex justify-center items-center ">
          <span className="mr-2" role="img" aria-label="No hay resultados">
            😕
          </span>
          Parece que no hay resultados para tu búsqueda.
        </div>
      )}
      {isFetching ? (
        <div className="w-full h-[calc(100vh-12.5rem)]  flex justify-center items-center ">
          <Loader text="obteniendo personajes..." />
        </div>
      ) : (
        <Characters />
      )}
    </div>
  );
};

export default Home;
