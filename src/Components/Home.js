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
      <div className="row">
        <Card img={levelOne} name="Viridian Forest"/>
        <Card img={levelTwo} name="Mt. Moon"/>
        <Card img={levelThree} name="Cerulean City"/>
      </div>
      <div className="row">
        <Card img={levelFour} name="Celadon City Fair"/>
        <Card img={levelFive} name="Safari Zone"/>
        <Card img={levelSix} name="Indigo Plateau"/>
      </div>
    </div>
  )
}

export default Home;
