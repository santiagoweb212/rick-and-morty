import { useState } from "react";
type IsVisibleType = {
  [key: string]: boolean;
};
const useDropDown = (data: IsVisibleType) => {
  const [isVisible, setIsVisible] = useState<IsVisibleType>(data);

  const handleDropDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;
    setIsVisible({ ...isVisible, [name]: !isVisible[name] });
  };

  return {
    isVisible,
    setIsVisible,
    handleDropDown,
  };
};
export default useDropDown;
