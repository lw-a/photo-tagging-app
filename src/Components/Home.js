import Card from "./Card";
import levelOne from '../images/levelOne.png'
import levelTwo from '../images/levelTwo.png'
import levelThree from '../images/levelThree.png'
import levelFour from '../images/levelFour.png'
import levelFive from '../images/levelFive.png'
import levelSix from '../images/levelSix.png'

function Home() {
  return (
    <div className="container">

      <div className="row mb-3">
        <div className="col">
          <Card img={levelOne} name="Viridian Forest"/>
        </div>
        <div className="col">
          <Card img={levelTwo} name="Mt. Moon"/>
        </div>
        <div className="col">
          <Card img={levelThree} name="Cerulean City"/>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <Card img={levelFour} name="Celadon City Fair"/>
        </div>
        <div className="col">
          <Card img={levelFive} name="Safari Zone"/>
        </div>
        <div className="col">
          <Card img={levelSix} name="Indigo Plateau"/>
        </div>
      </div>

    </div>
  )
}

export default Home;
