import "./Pagination.css";
import { useSearchParams } from "react-router-dom";

const Pagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = (selectedPage) => {
    const previousPage = searchParams.get("p");
    const pageRequest =
      typeof selectedPage === "number"
        ? selectedPage
        : Number(previousPage) + Number(selectedPage);
    const varifiedPageRequest = pageRequest > 1 ? pageRequest : 1;

    setSearchParams(() => ({
      p: varifiedPageRequest,
      limit: 13,
    }));
  };

  return (
    <div className="pagination">
      <button onClick={() => handleClick("-1")}>&laquo;</button>
      <button onClick={() => handleClick(1)}>1</button>
      <button onClick={() => handleClick(2)}>2</button>
      <button onClick={() => handleClick(3)}>3</button>
      <button onClick={() => handleClick("+1")}>&raquo;</button>
    </div>
  );
};

export default Pagination;
