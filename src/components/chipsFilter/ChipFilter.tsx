interface IChipFilterProps {
  textTitle: string;
  textValue: string;
  deleteChip:()=>void
}
const ChipFilter = ({ textTitle, textValue,deleteChip }: IChipFilterProps) => {
  return (
    <div className="flex justify-center items-center mx-1 font-medium py-1  px-2  rounded-full text-[#3276FA] chip--shadown border  ">
      <div className="text-xs font-medium leading-none max-w-full flex-initial text-pretty flex items-center">
        <span>
          {textTitle}:{textValue}
        </span>
      </div>
      <div className="flex flex-auto flex-row-reverse">
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x cursor-pointer hover:text-indigo-400 rounded-full w-4 h-4 ml-2"
            onClick={()=>deleteChip()}
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ChipFilter;
