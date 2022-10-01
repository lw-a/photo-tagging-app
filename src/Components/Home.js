import Card from "./Card";

function Home(props) {
  return (
    <div className="container">

      <div className="row mb-3">
        <div className="col">
          <Card levelData={props.levelData["one"]} clicked={() => props.setLevel("one")}/>
        </div>
        <div className="col">
          <Card levelData={props.levelData["two"]} clicked={() => props.setLevel("two")}/>
        </div>
        <div className="col">
          <Card levelData={props.levelData["three"]} clicked={() => props.setLevel("three")}/>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <Card levelData={props.levelData["four"]} clicked={() => props.setLevel("four")}/>
        </div>
        <div className="col">
          <Card levelData={props.levelData["five"]} clicked={() => props.setLevel("five")}/>
        </div>
        <div className="col">
          <Card levelData={props.levelData["six"]} clicked={() => props.setLevel("six")}/>
        </div>
      </div>

    </div>
  )
}

export default Home;
