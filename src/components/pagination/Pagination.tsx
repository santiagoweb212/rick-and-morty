import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/minimal.css";
interface IPaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}
const Pagination = ({
  currentPage,
  totalPages,
  setCurrentPage,
}: IPaginationProps) => {
  return (
    <div className=" flex justify-end  py-2">
      <ResponsivePagination
        current={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
        total={totalPages}
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
