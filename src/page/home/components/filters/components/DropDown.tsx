interface IDropDownProps {
  data: string[];
  valueSelected?: string;
  isVisble?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onSelectClick?: React.MouseEventHandler<HTMLLIElement>;
  name: string;
  nameBtn: string;
  textBtn: string;
}
const DropDown = ({
  data,
  valueSelected,
  isVisble,
  onClick,
  onSelectClick,
  name,
  nameBtn,
  textBtn,
}: IDropDownProps) => {
  return (
    <div className="relative w-fit flex flex-col py-1">
      <button
        name={nameBtn}
        className="flex gap-2 w-full justify-between bg-[#F9F9F9] shadow-md rounded-sm px-2"
        onClick={onClick}
      >
        <span>{`${textBtn}:`}</span>
        {valueSelected}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      <ul
        className={`${
          isVisble ? " hidden " : ""
        } absolute bg-[#F9F9F9] shadow-md rounded-sm w-full top-full  z-40 px-2`}
      >
        {data.map((item, i) => (
          <li
            key={i}
            data-name={name}
            className="cursor-pointer"
            onClick={onSelectClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
