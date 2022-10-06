import Nav from "./Nav";

function Leaderboard() {

  return (
    <div>
      <Nav />
      <div className="container">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Viridan Forest</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Mt. Moon</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Cerulean City</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Celadon City Fair</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Safari Zone</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Indigo Plateau</a>
          </li>
        </ul>
        <div>

        </div>
      </div>

    </div>
  )
}

export default Leaderboard;
