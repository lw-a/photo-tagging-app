import Nav from "./Nav";

function Game(props) {

  const levelData = props.levelData


  return(
    <div>

    <Nav levelData={levelData} time={props.time} setTime={props.setTime} running={props.running}/>
    <img src={levelData.img} alt="game" className="img-fluid w-100"/>
    </div>
  )
}

export default Game;
