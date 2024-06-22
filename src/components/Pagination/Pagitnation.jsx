import "./Pagination.css";

const Pagination = () => {

const handleClick = (page) => {
  console.log(page);
};

  return (
    <div className="pagination">
      <button onClick={() => handleClick(-1)}>&laquo;</button>
      <button onClick={() => handleClick(1)}>1</button>
      <button onClick={() => handleClick(2)}>2</button>
      <button onClick={() => handleClick(3)}>3</button>
      <button onClick={() => handleClick(+1)}>&raquo;</button>
    </div>
  );
};

export default Pagination;
