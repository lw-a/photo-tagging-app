import '../styles/Card.css';

function Card(props) {
  return (
    <div className="card" style={{width: "100%"}}>
      <img class="card-img-top" src={props.img} alt="level"></img>
      <div className="card-body d-flex justify-content-between align-items-center" style={{padding: "6px"}}>
        <p>{props.name}</p>
        <a href="#" className="card-link">Play!</a>
      </div>
    </div>
  )
}

export default Card;
