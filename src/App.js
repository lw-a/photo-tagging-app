import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Game from "./Components/Game";
import StartModal from "./Components/StartModal";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';

function App() {
  // const [background, setBackground] = useState(levelOne)
  const [level, setLevel] = useState(1);

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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home setLevel={setLevel}/>} />
        <Route path="/game" element={<Game img={img}/>}/>
      </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;
