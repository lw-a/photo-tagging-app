import Home from "./Components/Home";
import Game from "./Components/Game";
import StartModal from "./Components/StartModal";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import levelOne from './images/levelOne.png'
import levelTwo from './images/levelTwo.png'
import levelThree from './images/levelThree.png'
import levelFour from './images/levelFour.png'
import levelFive from './images/levelFive.png'
import levelSix from './images/levelSix.png'
import './styles/App.css';

function App() {
  const [level, setLevel] = useState("one");

  const levelData = {
    "one": {
      first: {
        name: 'Weedle',
        sprite: 'https://img.pokemondb.net/sprites/ruby-sapphire/normal/weedle.png'
      },
      second: {
        name: 'Slowpoke',
        sprite: 'https://img.pokemondb.net/sprites/ruby-sapphire/normal/slowpoke.png'
      },
      third: {
        name: 'Caterpie',
        sprite: 'https://img.pokemondb.net/sprites/ruby-sapphire/normal/caterpie.png'
      },
      img: levelOne,
      name: "Viridian Forest"
    },
    "two": {
      first: {
        name: 'Diglett',
        sprite: 'https://img.pokemondb.net/sprites/ruby-sapphire/normal/diglett.png'
      },
      second: {
        name: 'Zubat',
        sprite: 'https://img.pokemondb.net/sprites/ruby-sapphire/normal/zubat.png'
      },
      third: {
        name: 'Jigglypuff',
        sprite: 'https://img.pokemondb.net/sprites/ruby-sapphire/normal/jigglypuff.png'
      },
      img: levelTwo,
      name: "Mt. Moon"
    },
    "three": {
      first: {
        name: 'Tentacool',
        sprite: 'https://img.pokemondb.net/sprites/ruby-sapphire/normal/tentacool.png'
      },
      second: {
        name: 'Mr. Mime',
        sprite: 'https://img.pokemondb.net/sprites/ruby-sapphire/normal/mr-mime.png'
      },
      third: {
        name: 'Poliwag',
        sprite: 'https://img.pokemondb.net/sprites/ruby-sapphire/normal/poliwag.png'
      },
      img: levelThree,
      name: "Cerulean City"
    },
    "four": {
      first: {
        name: 'Raichu',
        sprite: 'https://img.pokemondb.net/sprites/ruby-sapphire/normal/raichu.png'
      },
      second: {
        name: 'Golduck',
        sprite: 'https://img.pokemondb.net/sprites/ruby-sapphire/normal/golduck.png'
      },
      third: {
        name: 'Porygon',
        sprite: 'https://img.pokemondb.net/sprites/ruby-sapphire/normal/porygon.png'
      },
      img: levelFour,
      name: "Celadon City Fair"
    },
    "five": {
      first: {
        name: 'Dratini and Pidgey',
        sprite: 'https://img.pokemondb.net/sprites/ruby-sapphire/normal/pidgey.png'
      },
      second: {
        name: 'Mewtwo',
        sprite: 'https://img.pokemondb.net/sprites/ruby-sapphire/normal/mewtwo.png'
      },
      third: {
        name: 'Tauros',
        sprite: 'https://img.pokemondb.net/sprites/ruby-sapphire/normal/tauros.png'
      },
      img: levelFive,
      name: "Safari Zone"
    },
    "six": {
      first: {
        name: 'Ekans',
        sprite: 'https://img.pokemondb.net/sprites/ruby-sapphire/normal/ekans.png'
      },
      second: {
        name: 'Venusaur',
        sprite: 'https://img.pokemondb.net/sprites/ruby-sapphire/normal/venusaur.png'
      },
      third: {
        name: 'Slowbro',
        sprite: 'https://img.pokemondb.net/sprites/ruby-sapphire/normal/slowbro.png'
      },
      img: levelSix,
      name: "Indigo Plateau"
    }
  }

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home setLevel={setLevel} levelData={levelData}/>} />
        <Route path="/game" element={<Game levelData={levelData[level]}/>}/>
      </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;
