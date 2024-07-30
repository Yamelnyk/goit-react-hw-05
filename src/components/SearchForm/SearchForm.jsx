export default function SearchForm({ onSearch, movieFilter }) {
  return (
    <div>
      <input
        placeholder="Search"
        type="search"
        value={movieFilter}
        onChange={(e) => onSearch(e.target.value)}
      />
      <button type="submit">Search</button>
    </div>
  );
}
