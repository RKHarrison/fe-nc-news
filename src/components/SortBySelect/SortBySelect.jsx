import "./SortBySelect.css";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

const SortBySelect = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedOption, setSelectedOption] = useState("");

  const refsForDisplayText = {
    "created_at DESC": "Latest articles",
    "created_at ASC": "Oldest articles",
    "votes DESC": "Votes: High to low",
    "votes ASC": "Votes: Low to high",
    "comment_count DESC": "Comments: Most commented",
    "comment_count ASC": "Comments: Least commented",
  };

  useEffect(() => {
    const sort_by = searchParams.get("sort_by");
    const order = searchParams.get("order");
    const refKey = `${sort_by} ${order}`;
    if (sort_by && order) {
      setSelectedOption(`${refsForDisplayText[refKey]}`);
    } else setSelectedOption("Sort by...");
  }, [searchParams]);

  const handleChange = (event) => {
    const changedValue = event.target.value.split(",");
    setSearchParams({ sort_by: changedValue[0], order: changedValue[1] });
  };

  return (
    <select
      onChange={handleChange}
      defaultValue=""
      aria-label="Sort articles options"
    >
      <option value="" disabled aria-label="Default sort option">
        {selectedOption}
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
