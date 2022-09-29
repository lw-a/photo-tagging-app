import Nav from "./Components/Nav";
import level1 from './images/level1.png'
import './styles/App.css';

function App() {

  const pokemon = {
    levelOne: {
      first: {
        name: 'Weedle',
        sprite: 'https://img.pokemondb.net/sprites/silver/normal/weedle.png'
      },
      second: {
        name: 'Slowpoke',
        sprite: 'https://img.pokemondb.net/sprites/ruby-sapphire/normal/slowpoke.png'
      },
      third: {
        name: 'Caterpie',
        sprite: 'https://img.pokemondb.net/sprites/silver/normal/caterpie.png'
      }
    }
  }

  return (
    <div className="App">
      <Nav pokemon={pokemon.levelOne}/>
      <div className='container-fluid'>
        <img src={level1} alt="game" className="img-fluid w-100"/>
      </div>
    </div>

  );
}

export default App;
