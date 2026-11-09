import { useState } from "react";
import concerts from "../data/concerts";

function Home() {
  const [records] = useState(concerts);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");
  const [sortBy, setSortBy] = useState("date");

  const visible = records
    .filter((c) =>
      (c.artist + c.city).toLowerCase().includes(search.toLowerCase())
    )
    .filter((c) => type === "All" || c.type === type)
    .sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));

  return (
    <div>
      <input
        placeholder="Search artist or city"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option>All</option>
        <option>Boy Group</option>
        <option>Girl Group</option>
        <option>Solo</option>
      </select>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="date">Date</option>
        <option value="price">Price</option>
        <option value="artist">Artist</option>
      </select>

      {visible.map((c) => (
        <div key={c.id}>
          <h3>{c.artist} - {c.tour}</h3>
          <p>{c.city}, {c.venue} | {c.date} | ${c.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;