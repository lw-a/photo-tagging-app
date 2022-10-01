import '../styles/Nav.css';

function Nav(props) {

  if (props.levelData) {
    const levelData = props.levelData

    return(
      <nav className='navbar bg-dark navbar-dark d-flex justify-content-center'>
        <h2 className="navbar-brand">Find the 3 Pokemon!</h2>
        <ul className="list-group list-group-horizontal list-group-flush">
          <li className="list-group-item border-0">{levelData.first.name} <img src={levelData.first.sprite} alt =''></img> </li>
          <li className="list-group-item border-0">{levelData.second.name} <img src={levelData.second.sprite} alt =''></img></li>
          <li className="list-group-item border-0">{levelData.third.name} <img src={levelData.third.sprite} alt =''></img></li>
        </ul>
      </nav>
    )
  } else {
    return (
      <nav className='navbar bg-dark navbar-dark mb-4 d-flex justify-content-center'>
        <h2 className="navbar-brand">Find that Pokemon!</h2>
      </nav>
    )
  }
}

export default Nav;
