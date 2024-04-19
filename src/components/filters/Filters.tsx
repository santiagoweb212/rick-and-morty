import DropDown from "./components/DropDown";
import useCharacterData from "../../page/home/hooks/useCharacterData";
import usePageNumberStore from "../../store/usePageNumberStore";
import useDropDown from "../../hooks/useDropDown";
import { genders, species, status } from "../../constants/filterOptions";

const Filters = () => {
  const { setCurrentPage } = usePageNumberStore();
  const { handleDropDown, isVisible, setIsVisible } = useDropDown({
    gender: true,
    status: true,
    specie: true,
  });

  const { setFilters, filters } = useCharacterData();

  const handleSelectionOption = (e: React.MouseEvent<HTMLLIElement>) => {
    const { textContent, dataset } = e.currentTarget;
    if (dataset.name && textContent) {
      setIsVisible({ ...isVisible, [dataset.name]: !isVisible[dataset.name] });
      setFilters(dataset.name, textContent);
      setCurrentPage(1);
    }
  };

  return (
    <div className=" flex justify-end gap-4 py-2 md:px-2">
      <DropDown
        data={status}
        onClick={handleDropDown}
        isVisble={isVisible.status}
        onSelectClick={handleSelectionOption}
        valueSelected={filters.status}
        textBtn="status"
        nameBtn="status"
        nameLi="status"
      />
      <DropDown
        data={genders}
        onClick={handleDropDown}
        isVisble={isVisible.gender}
        onSelectClick={handleSelectionOption}
        valueSelected={filters.gender}
        textBtn="genders"
        nameBtn="gender"
        nameLi="gender"
      />
      <DropDown
        data={species}
        onClick={handleDropDown}
        isVisble={isVisible.specie}
        onSelectClick={handleSelectionOption}
        valueSelected={filters.specie}
        textBtn="species"
        nameBtn="specie"
        nameLi="specie"
      />
    </div>
  );
};

export default Filters;
