import "./Pagination.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Pagination = () => {
  const [pageNumbers, setPageNumbers] = useState([1, 2, 3]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setCurrentPage(Number(searchParams.get("p")));
  }, [searchParams]);

  const handleClick = (clickedPage) => {
    const pageQuery =
      typeof clickedPage === "number"
        ? clickedPage
        : currentPage + Number(clickedPage);
    const validatedPageQuery = pageQuery > 0 ? pageQuery : 1;
    const newPageNums =
      pageQuery > 1 ? [pageQuery - 1, pageQuery, pageQuery + 1] : [1, 2, 3];

    setPageNumbers(newPageNums);
    setSearchParams(() => ({
      p: validatedPageQuery,
      limit: 13,
    }));
  };

  return (
    <div className="pagination">
      <button className="pag-arrow" onClick={() => handleClick("-1")}>
        &laquo;
      </button>
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
