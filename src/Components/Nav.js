import '../styles/Nav.css';

function Nav(props) {

  const pokemon = props.pokemon

  return(
    <nav className='navbar d-flex justify-content-center'>
      <h2 className="navbar-brand">Find the 3 Pokemon!</h2>
      <ul className="list-group list-group-horizontal list-group-flush">
        <li className="list-group-item border-0">{pokemon.first.name} <img src={pokemon.first.sprite} alt =''></img> </li>
        <li className="list-group-item border-0">{pokemon.second.name} <img src={pokemon.second.sprite} alt =''></img></li>
        <li className="list-group-item border-0">{pokemon.third.name} <img src={pokemon.third.sprite} alt =''></img></li>
      </ul>
    </nav>
  )
}

export default Nav;
