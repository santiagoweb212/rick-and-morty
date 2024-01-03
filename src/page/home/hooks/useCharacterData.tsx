import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getCharacters } from "../../../api/api";
import useCharactersStore from "../../../store/useCharactersStore";
import { useDebounce } from "../../../hooks/useDebounce";
import usePageNumberStore from "../../../store/usePageNumberStore";

const useCharacterData = () => {
  const { setCharacters, characters, filters, setFilters } = useCharactersStore(
    (state) => state
  );
  const page = usePageNumberStore((state) => state.currentPage);
  const debouncedName = useDebounce(filters.name, 500);

  const { isError, isLoading, isFetching } = useQuery({
    queryKey: ["character", page, { ...filters, name: debouncedName }],
    queryFn: async () => {
      let { gender, specie, status } = filters;
      gender = gender === "All" ? "" : gender;
      specie = specie === "All" ? "" : specie;
      status = status === "All" ? "" : status;
      const res = await getCharacters({
        gender,
        status,
        species: specie,
        page: String(page),
        name: debouncedName,
      });
      setCharacters(res);
      return res;
    },
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
  });
  return {
    characters,
    isError,
    isLoading,
    setFilters,
    filters,
    isFetching,
  };
};

export default useCharacterData;
