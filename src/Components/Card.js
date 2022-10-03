import { Link } from "react-router-dom";
import '../styles/Card.css';

function Card(props) {
  return (
    <Link to="/game" onClick={props.clicked}>
      <div className="card" style={{width: "100%"}}>
        <img className="card-img-top" src={props.levelData.smallImg} alt="level"></img>
        <div className="card-body d-flex justify-content-between align-items-center" style={{padding: "6px"}}>
          <p className="name">{props.levelData.name}</p>
          <p className="play">Play!</p>
        </div>
      </div>
    </Link>
  )
}

export default Card;
