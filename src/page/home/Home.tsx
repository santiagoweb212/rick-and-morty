import ChipsFilters from "../../components/chipsFilter/ChipsFilters";
import MainNavbar from "../../components/navbar/MainNavbar";
import Pagination from "../../components/pagination/Pagination";
import Loader from "../../components/ui/Loader";
import Characters from "./components/Characters";
import Filters from "./components/filters/Filters";
import useCharacterData from "./hooks/useCharacterData";

const Home = () => {
  const { isError,isFetching } = useCharacterData();

  return (
    <div className="container mx-auto min-h-screen  ">
      <MainNavbar />

      <Filters />
      <ChipsFilters />
      <Pagination />
      {isError && (
        <div className="w-full h-[calc(100vh-12.5rem)]  flex justify-center items-center ">
          <span className="mr-2" role="img" aria-label="No hay resultados">
            😕
          </span>
          Parece que no hay resultados para tu búsqueda.
        </div>
      )}
      { isFetching ? (
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
