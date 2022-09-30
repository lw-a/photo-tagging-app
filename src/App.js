import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Game from "./Components/Game";
import StartModal from "./Components/StartModal";
import { useState } from "react";
import './styles/App.css';

function App() {
  // const [background, setBackground] = useState(levelOne)

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
    <Home />
      {/* <Nav pokemon={pokemon.levelOne} />
      <div className='container-fluid'>
        <Game background={background} />
      </div>
      <StartModal /> */}
    </div>

  );
}

export default App;
