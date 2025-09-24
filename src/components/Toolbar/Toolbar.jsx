import SortSelect from "./SortSelect";
import SearchInput from "./SearchInput";
export default function Toolbar() {
  return (
    <>
      <SearchInput />
      <button onClick={() => setShowCompleted(!showCompleted)}>
        {showCompleted ? "Hide" : "Show"} Completed
      </button>
      <SortSelect />
      
    </>
  );
}
