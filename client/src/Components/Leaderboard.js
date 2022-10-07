import Nav from "./Nav";
import React, { useEffect, useState } from 'react';

function Leaderboard() {

  const [scores, setScores] = useState([]);

  useEffect(() => {
    window.fetch('/api/scores')
      .then(response => response.json())
      .then(json => setScores(json))
      .catch(error => console.log(error));
  }, []);

  const scoresArray = []
  // console.log(scores)
  scores.forEach((score) => {
    scoresArray.push([score.id, score.name, score.time, score.level])
  })

  return (
    <div>
      <Nav />
      <div className="container">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Viridan Forest</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Mt. Moon</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Cerulean City</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Celadon City Fair</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Safari Zone</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Indigo Plateau</a>
          </li>
        </ul>
        <div>

        </div>
        {/* {scores.map(score => <div key={score.id}>{score}</div>)} */}
        <ul>
          {scoresArray.map(score => <li key={score[0]} className="text-light"> {score[1]} - {score[2]} </li>)}

        </ul>
      </div>

    </div>
  )
}

export default Leaderboard;

// import React, { Component } from 'react';

// class Leaderboard extends Component {

//   componentDidMount() {
//     window.fetch('/api/scores')
//       .then(response => response.json())
//       .then(json => console.log(json))
//       .catch(error => console.log(error));
//   }

//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default Leaderboard;
