import Nav from "./Nav";
import DropDown from "./DropDown";
import '../styles/Game.css';
import { useEffect, useState } from "react";

function Game(props) {

  const levelData = props.levelData
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [showList, setShowList] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    setX(`${e.pageX}px`);
    setY(`${e.pageY}px`);
    setShowList(true);
  };


  return(
    <div>

    <Nav levelData={levelData} time={props.time} setTime={props.setTime} running={props.running}/>
    <img src={levelData.img} alt="game" className="img-fluid w-100" onClick={handleClick}/>
    <DropDown x={x} y={y} showList={showList} levelData={levelData}></DropDown>
    </div>
  )
}

export default Game;
