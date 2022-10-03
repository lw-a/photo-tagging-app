import Nav from "./Nav";
import DropDown from "./DropDown";
import EndModal from "./EndModal";
import '../styles/Game.css';
import { useEffect, useState , useRef } from "react";

function Game(props) {

  const levelData = props.levelData
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [menuX, setMenuX] = useState(0);
  const [menuY, setMenuY] = useState(0);
  const [showList, setShowList] = useState(false);
  const gameRef = useRef();

  const handleClick = (e) => {
    e.preventDefault()

    if (gameRef.current.offsetWidth - e.pageX < 150) {
      setMenuX(e.pageX - 150)
    } else {
      setMenuX(e.pageX)
    }
    setX(e.pageX)

    if (gameRef.current.offsetHeight - e.pageY < 150) {
      setMenuY(e.pageY - 150)
    } else {
      setMenuY(e.pageY)
    }
    setY(e.pageY)
    setShowList(!showList)
  };

  const size = (x, y, pokemon) => {
    let width = gameRef.current.offsetWidth;
    const relativeX = x / width;
    console.log(relativeX)
    let height = gameRef.current.offsetHeight;
    const relativeY = (y - document.querySelector("nav").clientHeight) / height;
    console.log(relativeY)

    const selectedX = Math.abs(relativeX - levelData[pokemon].location[0])
    const selectedY = Math.abs(relativeY - levelData[pokemon].location[1])

    console.log(selectedX)
    console.log(selectedY)

    if ( selectedX < 0.03 && selectedY < 0.03) {
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

  useEffect(() => {
    const results = Object.values(props.progress);
    if (results.every((result) => result)) props.endGame()
  }, [props])

  return(
    <div ref={gameRef}>
    <Nav levelData={levelData} time={props.time} setTime={props.setTime} running={props.running} />
    <img src={levelData.img} alt="game" className="img-fluid w-100" onClick={handleClick}/>
    <DropDown x={x} y={y} menuX={menuX} menuY={menuY} showList={showList} progress={props.progress} levelData={levelData} size={size} setShowList={setShowList}/>
    <EndModal levelData={levelData} time={props.time} show={props.show} />
    </div>
  )
}

export default Game;
