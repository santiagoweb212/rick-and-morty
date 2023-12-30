import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/minimal.css";
import useCharacterData from "../../page/home/hooks/useCharacterData";
import usePageNumberStore from "../../store/usePageNumberStore";

const Pagination = () => {
  const { currentPage, setCurrentPage } = usePageNumberStore();
  const { characters } = useCharacterData();
  return (
    <div className=" flex justify-end  py-2">
      <ResponsivePagination
        current={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
        total={characters.info.pages}
        maxWidth={250}
        className="my-pagination"
        pageItemClassName="my-item"
        pageLinkClassName="my-link"
        activeItemClassName="my-active"
        disabledItemClassName="my-disabled"
        navClassName="my-nav"
      />
    </div>
  );
};

export default Pagination;
