import Nav from "./Components/Nav";
import Game from "./Components/Game";
import StartModal from "./Components/StartModal";
import levelOne from './images/levelOne.png'
import { useState } from "react";
import './styles/App.css';

function App() {
  const [showModal, setShowModal] = useState(true);

  const [background, setBackground] = useState(levelOne)

  function displayModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

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
      <Nav pokemon={pokemon.levelOne} />
      <div className='container-fluid'>
        <Game background={background} />
      </div>
      <StartModal show={showModal} />
    </div>

  );
}

export default App;
