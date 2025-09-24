export default function SearchInput() {
    return (
        <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
        />
    );
}