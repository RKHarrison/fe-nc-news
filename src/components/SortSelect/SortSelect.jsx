import { useSearchParams } from "react-router-dom";


const SortSelect = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (event) => {
        const selecterValues = event.target.value.split(',');
        let selectedSearch = { sort_by: selecterValues[0], order: selecterValues[1] };
        setSearchParams(selectedSearch)
  };

  return (
    <select onChange={handleChange} defaultValue="">
      <option value="" disabled>
        Sort by...
      </option>
      <option value="created_at,DESC">Latest articles</option>
      <option value="created_at,ASC">Oldest articles</option>
      <option value="votes,ASC">Votes: Low to high</option>
      <option value="votes,DESC">Votes: High to low</option>
      <option value="comment_count,DESC">Comments: Most commented</option>
      <option value="comment_count,ASC">Comments: Least commented</option>
    </select>
  );
};

export default SortSelect;
