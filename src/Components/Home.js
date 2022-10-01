import Card from "./Card";
import Nav from "./Nav";

function Home(props) {
  return (

    <div>
      <Nav />
      <div className="container">
        <div className="row mb-3">
          <div className="col">
            <Card levelData={props.levelData["one"]} clicked={() => {props.setLevel("one")
            props.setRunning(true)}}/>
          </div>
          <div className="col">
            <Card levelData={props.levelData["two"]} clicked={() => {props.setLevel("two")
            props.setRunning(true)}}/>
          </div>
          <div className="col">
            <Card levelData={props.levelData["three"]} clicked={() => {props.setLevel("three")
            props.setRunning(true)}}/>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Card levelData={props.levelData["four"]} clicked={() => {props.setLevel("four")
            props.setRunning(true)}}/>
          </div>
          <div className="col">
            <Card levelData={props.levelData["five"]} clicked={() => {props.setLevel("five")
            props.setRunning(true)}}/>
          </div>
          <div className="col">
            <Card levelData={props.levelData["six"]} clicked={() => {props.setLevel("six")
            props.setRunning(true)}}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
