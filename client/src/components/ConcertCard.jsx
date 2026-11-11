function ConcertCard({ concert }) {
  return (
    <article className="card">
      <div className="card-img">
        <img
          src={`/images/${concert.id}.jpg`}
          alt={concert.artist}
          onError={(e) => (e.target.style.display = "none")}
        />
        <span className="badge">{concert.type}</span>
      </div>
      <div className="card-body">
        <h3>{concert.artist}</h3>
        <p className="tour">{concert.tour}</p>
        <p>{concert.city}, {concert.country}</p>
        <p>{concert.venue}</p>
        <p>{concert.date}</p>
        <p className="price">${concert.price}</p>
      </div>
    </article>
  );
}

export default ConcertCard;