import { useState } from "react";
import concerts from "../data/concerts";
import FilterControls from "../components/FilterControls";
import ConcertList from "../components/ConcertList";

function Home() {
  const [records] = useState(concerts);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");
  const [sortBy, setSortBy] = useState("date");

  const visible = records
    .filter((c) =>
      (c.artist + " " + c.city).toLowerCase().includes(search.toLowerCase())
    )
    .filter((c) => type === "All" || c.type === type)
    .sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));

  return (
    <div className="page">
      <h2>Upcoming Concerts</h2>
      <FilterControls
        search={search}
        setSearch={setSearch}
        type={type}
        setType={setType}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <ConcertList concerts={visible} />
    </div>
  );
}

export default Home;