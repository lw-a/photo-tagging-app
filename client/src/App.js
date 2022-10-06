import Home from "./Components/Home";
import Game from "./Components/Game";
import Leaderboard from "./Components/Leaderboard";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import levelOne from './images/levelOne.png'
import levelTwo from './images/levelTwo.png'
import levelThree from './images/levelThree.png'
import levelFour from './images/levelFour.png'
import levelFive from './images/levelFive.png'
import levelSix from './images/levelSix.png'
import levelOneSmall from './images/levelOneSmall.png'
import levelTwoSmall from './images/levelTwoSmall.png'
import levelThreeSmall from './images/levelThreeSmall.png'
import levelFourSmall from './images/levelFourSmall.png'
import levelFiveSmall from './images/levelFiveSmall.png'
import levelSixSmall from './images/levelSixSmall.png'
import './styles/App.css'

function App() {
  const [level, setLevel] = useState("one");
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(true);
  const [show, setShow] = useState(false);
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState({
    first: false,
    second: false,
    third: false
  })
  const [showList, setShowList] = useState(false);


  function startGame() {

    setRunning(true)
    setShow(false)
    setTime(0)
    setShowList(false)

    setProgress({
      first: false,
      second: false,
      third: false
    });

  }

  function endGame () {
    setRunning(false)
    setScore(time)
    setShow(true)
  }

  const levelData = {
    one: {
      first: {
        name: 'Weedle',
        sprite: 'https://img.pokemondb.net/sprites/ruby-sapphire/normal/weedle.png',
        location: [0.39970717423133234, 0.4541108986615679]
      },
      second: {
        name: 'Slowpoke',
        sprite: 'https://img.pokemondb.net/sprites/ruby-sapphire/normal/slowpoke.png',
        location: [0.8850658857979502, 0.6978967495219885]
      },
      third: {
        name: 'Caterpie',
        sprite: 'https://img.pokemondb.net/sprites/ruby-sapphire/normal/caterpie.png',
        location: [0.4172767203513909, 0.8718929254302104]
      },
      img: levelOne,
      smallImg: levelOneSmall,
      name: "Viridian Forest"
    },
    two: {
      first: {
        name: 'Diglett',
        sprite: 'https://img.pokemondb.net/sprites/ruby-sapphire/normal/diglett.png',
        location: [0.6522693997071742, 0.06876790830945559]
      },
      second: {
        name: 'Zubat',
        sprite: 'https://img.pokemondb.net/sprites/ruby-sapphire/normal/zubat.png',
        location: [0.7064421669106882, 0.5023877745940784]
      },
      third: {
        name: 'Jigglypuff',
        sprite: 'https://img.pokemondb.net/sprites/ruby-sapphire/normal/jigglypuff.png',
        location: [0.10688140556368961, 0.5491881566380133]
      },
      img: levelTwo,
      smallImg: levelTwoSmall,
      name: "Mt. Moon"
    },
    three: {
      first: {
        name: 'Tentacool',
        sprite: 'https://img.pokemondb.net/sprites/ruby-sapphire/normal/tentacool.png',
        location: [0.48316251830161056, 0.1824196597353497]
      },
      second: {
        name: 'Mr. Mime',
        sprite: 'https://img.pokemondb.net/sprites/ruby-sapphire/normal/mr-mime.png',
        location: [0.11127379209370425, 0.5151228733459358]
      },
      third: {
        name: 'Poliwag',
        sprite: 'https://img.pokemondb.net/sprites/ruby-sapphire/normal/poliwag.png',
        location: [0.8748169838945827, 0.20226843100189035]
      },
      img: levelThree,
      smallImg: levelThreeSmall,
      name: "Cerulean City"
    },
    four: {
      first: {
        name: 'Raichu',
        sprite: 'https://img.pokemondb.net/sprites/ruby-sapphire/normal/raichu.png',
        location: [0.2042459736456808, 0.4909437559580553]
      },
      second: {
        name: 'Golduck',
        sprite: 'https://img.pokemondb.net/sprites/ruby-sapphire/normal/golduck.png',
        location: [0.37774524158125916, 0.6129647283126788]
      },
      third: {
        name: 'Porygon',
        sprite: 'https://img.pokemondb.net/sprites/ruby-sapphire/normal/porygon.png',
        location: [0.7554904831625183, 0.4775977121067683]
      },
      img: levelFour,
      smallImg: levelFourSmall,
      name: "Celadon City Fair"
    },
    five: {
      first: {
        name: 'Pidgey',
        sprite: 'https://img.pokemondb.net/sprites/ruby-sapphire/normal/pidgey.png',
        location: [0.17423133235724744, 0.6695075757575758]
      },
      second: {
        name: 'Mewtwo',
        sprite: 'https://img.pokemondb.net/sprites/ruby-sapphire/normal/mewtwo.png',
        location: [0.5087847730600292, 0.2509469696969697]
      },
      third: {
        name: 'Tauros',
        sprite: 'https://img.pokemondb.net/sprites/ruby-sapphire/normal/tauros.png',
        location: [0.15373352855051245, 0.3096590909090909]
      },
      img: levelFive,
      smallImg: levelFiveSmall,
      name: "Safari Zone"
    },
    six: {
      first: {
        name: 'Ekans',
        sprite: 'https://img.pokemondb.net/sprites/ruby-sapphire/normal/ekans.png',
        location: [0.6178623718887262, 0.5574548907882241]
      },
      second: {
        name: 'Venusaur',
        sprite: 'https://img.pokemondb.net/sprites/ruby-sapphire/normal/venusaur.png',
        location: [0.3945827232796486, 0.3352326685660019]
      },
      third: {
        name: 'Slowbro',
        sprite: 'https://img.pokemondb.net/sprites/ruby-sapphire/normal/slowbro.png',
        location: [0.8060029282576867, 0.6666666666666666]
      },
      img: levelSix,
      smallImg: levelSixSmall,
      name: "Indigo Plateau"
    }
  }

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home setLevel={setLevel} levelData={levelData} startGame={startGame} /> } />
        <Route path="/game" element={<Game levelData={levelData[level]} time={time} setTime={setTime} running={running} progress={progress} setProgress={setProgress} endGame={endGame} show={show} startGame={startGame} setShowList={setShowList} showList={showList}/> } />
        <Route path="/leaderboard" element={<Leaderboard /> } />
      </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;
