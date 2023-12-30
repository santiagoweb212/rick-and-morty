import useCharacterData from "../../../page/home/hooks/useCharacterData";

const SearchBar = () => {
  const { setFilters, filters } = useCharacterData();
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    setFilters(name, value);
  };
  return (
    <div className="w-64 bg-transparent">
      <input
        type="search"
        name="name"
        onChange={handleOnChange}
        placeholder="Search..."
        value={filters.name}
        className="text-slate-800 w-full rounded-md py-1 px-2 bg-transparent border outline-none"
      />
    </div>
  );
};

export default SearchBar;
