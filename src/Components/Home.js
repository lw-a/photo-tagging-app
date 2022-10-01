import Card from "./Card";
import Nav from "./Nav";

function Home(props) {
  return (

    <div>
      <Nav />
      <div className="container mb-3">
        <div className="row mb-3">
          <div className="col">
            <Card levelData={props.levelData["one"]} clicked={() => {props.setLevel("one")
            props.startGame()}}/>
          </div>
          <div className="col">
            <Card levelData={props.levelData["two"]} clicked={() => {props.setLevel("two")
            props.startGame()}}/>
          </div>
          <div className="col">
            <Card levelData={props.levelData["three"]} clicked={() => {props.setLevel("three")
            props.startGame()}}/>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Card levelData={props.levelData["four"]} clicked={() => {props.setLevel("four")
            props.startGame()}}/>
          </div>
          <div className="col">
            <Card levelData={props.levelData["five"]} clicked={() => {props.setLevel("five")
            props.startGame()}}/>
          </div>
          <div className="col">
            <Card levelData={props.levelData["six"]} clicked={() => {props.setLevel("six")
            props.startGame()}}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
