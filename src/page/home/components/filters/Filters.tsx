import { useState } from "react";
import DropDown from "./components/DropDown";
import useCharacterData from "../../hooks/useCharacterData";
import usePageNumberStore from "../../../../store/usePageNumberStore";
type IsVisibleType = {
  [key: string]: boolean;
};

const Filters = () => {
  const status: string[] = ["All", "Alive", "Dead", "unknown"];
  const genders: string[] = ["All", "Male", "Female", "Genderless", "unknown"];
  const species: string[] = [
    "All",
    "todos",
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];
  const { setCurrentPage } = usePageNumberStore();
  const [isVisible, setIsVisible] = useState<IsVisibleType>({
    gender: true,
    status: true,
    specie: true,
  });
  const { setFilters, filters } = useCharacterData();
  const handleDropDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;
    setIsVisible({ ...isVisible, [name]: !isVisible[name] });
    console.log(name);
  };
  const handleSelectionOption = (e: React.MouseEvent<HTMLLIElement>) => {
    const { textContent, dataset } = e.currentTarget;
    if (dataset.name && textContent) {
      setIsVisible({ ...isVisible, [dataset.name]: !isVisible[dataset.name] });
      setFilters(dataset.name, textContent);
      setCurrentPage(1);
    }
  };
  return (
    <div className=" flex justify-end gap-4 py-2">
      <DropDown
        data={status}
        onClick={handleDropDown}
        isVisble={isVisible.status}
        onSelectClick={handleSelectionOption}
        valueSelected={filters.status}
        textBtn="status"
        nameBtn="status"
        name="status"
      />
      <DropDown
        data={genders}
        onClick={handleDropDown}
        isVisble={isVisible.gender}
        onSelectClick={handleSelectionOption}
        valueSelected={filters.gender}
        textBtn="gender"
        nameBtn="gender"
        name="gender"
      />
      <DropDown
        data={species}
        onClick={handleDropDown}
        isVisble={isVisible.specie}
        onSelectClick={handleSelectionOption}
        valueSelected={filters.specie}
        textBtn="specie"
        nameBtn="specie"
        name="specie"
      />
    </div>
  );
};

export default Filters;
