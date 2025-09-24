import SortSelect from "./SortSelect";
import SearchInput from "./SearchInput";
export default function Toolbar({
  setShowCompleted,
  query,
  setQuery,
  sortMode,
  showCompleted,
  setSortMode,
  setShowCompleted,
}) {
  return (
    <>
      <SearchInput query={query} setQuery={setQuery} />
      <button onClick={() => setShowCompleted(!showCompleted)}>
        {showCompleted ? "Hide" : "Show"} Completed
      </button>
      <SortSelect sortMode={sortMode} setSortMode={setSortMode} />
    </>
  );
}
