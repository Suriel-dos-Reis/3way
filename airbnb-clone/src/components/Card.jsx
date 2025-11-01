export default function Card(props) {

  let badgeText;
  if (props.openspots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.country === "Online") {
    badgeText = "ONLINE"
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src= {`/images/${props.img}`} className="card-photo" alt="imagem card" />
      <div className="card-rating">
        <img src="/images/star.png" className="star" alt="imagem card" />
        <p>{props.rating} ({props.reviewCount}).{props.country}</p>
      </div>
      <p className="card-title">{props.title}</p>
      <p>
        <strong>From ${props.price}</strong> / person
      </p>
    </div>
  );
}