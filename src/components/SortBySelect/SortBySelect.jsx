import "./SortBySelect.css";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SortBySelect = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    const sort_by = searchParams.get("sort_by");
    const order = searchParams.get("order");
    setSelectedOption(sort_by && order ? `${sort_by},${order}` : "");
  }, []);

  const handleChange = (event) => {
    const [sort_by, order] = event.target.value.split(",");
    setSearchParams((previousSearchParams) => ({
      ...previousSearchParams,
      sort_by: sort_by,
      order: order,
    }));
  };


  return (
    <select
      onChange={handleChange}
      aria-label="Sort articles options"
      value={selectedOption}
    >
      <option value="" disabled aria-label="Default sort option">
        Sort articles by...
      </option>
      <option value="created_at,DESC" aria-label="Sort by latest articles">
        Latest articles
      </option>
      <option value="created_at,ASC" aria-label="Sort by oldest articles">
        Oldest articles
      </option>
      <option value="votes,DESC" aria-label="Sort by votes high to low">
        Votes: High to low
      </option>
      <option value="votes,ASC" aria-label="Sort by votes low to high">
        Votes: Low to high
      </option>
      <option value="comment_count,DESC" aria-label="Sort by most commented">
        Comments: Most commented
      </option>
      <option value="comment_count,ASC" aria-label="Sort by least commented">
        Comments: Least commented
      </option>
    </select>
  );
};
export default SortBySelect;
