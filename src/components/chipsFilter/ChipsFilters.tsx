import useCharactersStore from "../../store/useCharactersStore";
import ChipFilter from "./ChipFilter";

const ChipsFilters = () => {
  const { filters, setFilters } = useCharactersStore((state) => state);

  const filterArray = Object.entries(filters);

  const filteredArray = filterArray.filter(([key, value]) => {
    return !(key === "name") && !(value === "All");
  });

  return (
    <div className="flex items-center py-2">
      <img src="/filter-icon.png" alt="" />
      <span className="font-medium px-1">applied filters:</span>
      {filteredArray.map(([key, value], i) => (
        <div key={i} className="w-fit">
          <ChipFilter
            textTitle={key}
            textValue={value}
            deleteChip={() => setFilters(key, "All")}
          />
        </div>
      ))}
    </div>
  );
};

export default ChipsFilters;
