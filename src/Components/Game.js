import Nav from "./Nav";
import DropDown from "./DropDown";
import '../styles/Game.css';
import { useEffect, useState , useRef } from "react";

function Game(props) {

  const levelData = props.levelData
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [coords, setCoords] = useState([0, 0]);
  const [showList, setShowList] = useState(false);
  const gameRef = useRef();
  let [correct, setCorrect] = useState(false)

  const handleClick = (e) => {
    e.preventDefault();

    if (gameRef.current.offsetWidth - e.pageX < 150) {
      setX(e.pageX - 150);
    } else {
      setX(e.pageX);
    }

    if (gameRef.current.offsetHeight - e.pageY < 150) {
      setY(e.pageY - 150);
    } else {
      setY(e.pageY);
    }
    setCoords([e.pageX, e.pageY]);
    setShowList(!showList);
  };

  const size = (x, y, pokemon) => {
    let width = gameRef.current.offsetWidth;
    const relativeX = x / width;
    console.log(relativeX)
    let height = gameRef.current.offsetHeight;
    const relativeY = (y - document.querySelector("nav").clientHeight) / height;
    console.log(relativeY)

    if (Math.abs(relativeX - levelData[pokemon].location[0]) < 0.03 && Math.abs(relativeY - levelData[pokemon].location[1]) < 0.03) {
      console.log(levelData[pokemon].name)
      console.log(props.progress)
      console.log(levelData[pokemon])

      props.setProgress({
        ...props.progress,
        [pokemon]: true,
      });

      console.log(props.progress)
    } else {
      console.log(`not ${levelData[pokemon].name}`)
      console.log(props.progress)

    }
  }

  return(
    <div ref={gameRef}>
    <Nav levelData={levelData} time={props.time} setTime={props.setTime} running={props.running} />
    <img src={levelData.img} alt="game" className="img-fluid w-100" onClick={handleClick}/>
    <DropDown x={x} y={y} showList={showList} levelData={levelData} size={size}/>
    </div>
  )
}

export default Game;
