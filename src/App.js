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
  // const [background, setBackground] = useState(levelOne)
  const [level, setLevel] = useState("one");

  const levelData = {
    "one": {
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
      },
      img: levelOne,
      name: "Viridian Forest"
    },
    "two": {
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
      },
      img: levelTwo,
      name: "Viridian Forest"
    },
    "three": {
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
      },
      img: levelThree,
      name: "Viridian Forest"
    },
    "four": {
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
      },
      img: levelFour,
      name: "Viridian Forest"
    },
    "five": {
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
      },
      img: levelFive,
      name: "Viridian Forest"
    },
    "six": {
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
      },
      img: levelSix,
      name: "Viridian Forest"
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
