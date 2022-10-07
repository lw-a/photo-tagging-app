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

  let scoresArray = []
  // console.log(scores)
  scores.forEach((score) => {
    scoresArray.push([score.id, score.name, score.time, score.level])
  })

  scoresArray = scoresArray.sort(function(a, b) {
    return a[2] - b[2]
  })

  const handleFilter = (e) => {
    // e.preventDefault()
    console.log(e)
  }

  return (
    <div>
      <Nav />
      <div className="container">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" onClick={(handleFilter())}>Viridan Forest</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={(handleFilter())}>Mt. Moon</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={(handleFilter())}>Cerulean City</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={(handleFilter())}>Celadon City Fair</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={(handleFilter())}>Safari Zone</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={(handleFilter())}>Indigo Plateau</a>
          </li>
        </ul>
        <div>

        </div>
        {/* {scores.map(score => <div key={score.id}>{score}</div>)} */}



        <table className="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Time (seconds)</th>
    </tr>
  </thead>
  <tbody className="table-group-divider">
    {scoresArray.map(score => <tr><td> {score[1]} </td><td><span>{("0" + Math.floor((score[2] / 60000) % 60)).slice(-2)}:</span> <span>{("0" + Math.floor((score[2] / 1000) % 60)).slice(-2)}</span></td></tr>)}
  </tbody>
</table>

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
