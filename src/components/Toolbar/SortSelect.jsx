import { makeSorter } from "../../utils/sorters.js";
export default function SortSelect(sortMode, setSortMode) {
  return (
    <select
      value={sortMode}
      name=""
      id=""
      onChange={(e) => setSortMode(e.target.value)}
    >
      <option value="newFirst">Newest First</option>
      <option value="oldFirst">Oldest First</option>
      <option value="A-Å">A-Å</option>
      <option value="Å-A">Å-A</option>
    </select>
  );
}
