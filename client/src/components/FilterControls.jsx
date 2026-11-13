function FilterControls({ search, setSearch, type, setType, sortBy, setSortBy }) {
  return (
    <div className="controls">
      <input
        type="text"
        placeholder="Search artist or city"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="All">All types</option>
        <option value="Boy Group">Boy Group</option>
        <option value="Girl Group">Girl Group</option>
        <option value="Solo">Solo</option>
      </select>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="date">Sort by date</option>
        <option value="price">Sort by price</option>
        <option value="artist">Sort by artist</option>
      </select>
    </div>
  );
}

export default FilterControls;