export default function SortSelect() {
    const [sortMode, setSortMode] = useState("newFirst");

    return (
        <select name="" id="" onChange={(e) => setSortMode(e.target.value)} value={sortMode}>
            <option value="newFirst">Newest First</option>
            <option value="oldFirst">Oldest First</option>
            <option value="A-Å">A-Å</option>
            <option value="Å-A">Å-A</option>
        </select>
    );
}