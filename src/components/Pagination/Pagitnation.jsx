import "./Pagination.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Pagination = () => {
  const [pageNumbers, setPageNumbers] = useState([1, 2, 3]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const pageNumberFromUrl = Number(searchParams.get("p"));
    setCurrentPage(pageNumberFromUrl || 1);
  }, [searchParams]);

  const handleClick = (clickedPageNumber) => {
    const pageQuery =
      typeof clickedPageNumber === "number"
        ? clickedPageNumber
        : currentPage + Number(clickedPageNumber);

    const newPageNums =
      pageQuery > 1 ? [pageQuery - 1, pageQuery, pageQuery + 1] : [1, 2, 3];

    setPageNumbers(newPageNums);
    setSearchParams(() => ({
      p: pageQuery || 1,
      limit: 13,
    }));
  };

  return (
    <div className="pagination">
      {currentPage <= 1 ? (
        <button disabled className="pag-arrow">
          &laquo;
        </button>
      ) : (
        <button className="pag-arrow" onClick={() => handleClick("-1")}>
          &laquo;
        </button>
      )}
      {pageNumbers.map((pageNum) => (
        <button
          key={pageNum}
          className={pageNum === currentPage ? "active" : ""}
          onClick={() => handleClick(pageNum)}
        >
          {pageNum}
        </button>
      ))}
      <button className="pag-arrow" onClick={() => handleClick("+1")}>
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;
