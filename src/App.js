import Nav from "./Components/Nav";
import level1 from './images/level1.png'
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className='container-fluid'>
        <img src={level1} alt="game" className="img-fluid w-100"/>
      </div>
    </div>

  );
}

export default App;
