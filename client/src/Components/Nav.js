import { Link } from "react-router-dom";
import '../styles/Nav.css';
import Timer from "./Timer";


function Nav(props) {

  if (props.levelData) {
    const levelData = props.levelData

    return(
      <nav className='navbar bg-dark navbar-dark d-flex justify-content-between px-3 py-0 fixed-top'>
        <h2 className="navbar-brand">Find the 3 Pokemon!</h2>
        <ul className="list-group list-group-horizontal list-group-flush">
          <li className="list-group-item border-0 text-bg-dark">{levelData.first.name} <img src={levelData.first.sprite} alt =''></img> <span hidden={props.progress.first ? false : true}>✅</span> </li>
          <li className="list-group-item border-0 text-bg-dark">{levelData.second.name} <img src={levelData.second.sprite} alt =''></img> <span hidden={props.progress.second ? false : true}>✅</span> </li>
          <li className="list-group-item border-0 text-bg-dark">{levelData.third.name} <img src={levelData.third.sprite} alt =''></img> <span hidden={props.progress.third ? false : true}>✅</span> </li>
        </ul>
        <Timer time={props.time} setTime={props.setTime} running={props.running}/>
        <Link to="/"><button type="button" className="btn btn-secondary">Home</button></Link>
      </nav>
    )
  } else {
    return (
      <nav className='navbar bg-dark navbar-dark my-2 d-flex justify-content-center'>
        <h2 className="text-light">Find That Pokemon!</h2>
        <Link to="/"><button type="button" className="btn btn-secondary">Home</button></Link>
      <Link to="/leaderboard"><button type="button" className="btn btn-secondary">Leaderboard</button></Link>
      </nav>
    )
  }
}

export default Nav;
