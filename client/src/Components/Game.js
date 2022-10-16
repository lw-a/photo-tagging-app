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
  const gameRef = useRef();
  let navHeight = 80

  if (document.querySelector("nav")) {
    navHeight = document.querySelector("nav").clientHeight
  }

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
    props.setShowList(!props.showList)
  };

  const size = (x, y, pokemon) => {
    let width = gameRef.current.offsetWidth;
    const relativeX = x / width;
    let height = gameRef.current.offsetHeight;
    const relativeY = (y - navHeight) / height;

    const selectedX = Math.abs(relativeX - levelData[pokemon].location[0])
    const selectedY = Math.abs(relativeY - levelData[pokemon].location[1])


    if ( selectedX < 0.03 && selectedY < 0.03) {
      props.setProgress({
        ...props.progress,
        [pokemon]: true,
      });
    }
  }

  useEffect(() => {
    const results = Object.values(props.progress);
    if (results.every((result) => result)) props.endGame()
  }, [props])

  return(
    <div ref={gameRef}>
    <Nav levelData={levelData} time={props.time} setTime={props.setTime} running={props.running} progress={props.progress} />
    <img src={levelData.img} alt="game" className="img-fluid w-100" onClick={handleClick} style={{marginTop: navHeight}}/>
    <DropDown x={x} y={y} menuX={menuX} menuY={menuY} showList={props.showList} progress={props.progress} levelData={levelData} size={size} setShowList={props.setShowList}/>
    <EndModal levelData={levelData} time={props.time} show={props.show} startGame={props.startGame} score={props.score}/>
    </div>
  )
}

export default Game;
