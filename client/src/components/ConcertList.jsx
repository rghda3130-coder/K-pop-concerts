import ConcertCard from "./ConcertCard";

function ConcertList({ concerts }) {
  if (concerts.length === 0) {
    return <p className="empty">No concerts found.</p>;
  }

  return (
    <div className="grid">
      {concerts.map((c) => (
        <ConcertCard key={c.id} concert={c} />
      ))}
    </div>
  );
}

export default ConcertList;