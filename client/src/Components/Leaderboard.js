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
  scores.forEach((score) => {
    scoresArray.push([score.id, score.name, score.time, score.level])
  })
  scoresArray = scoresArray.sort(function(a, b) {
    return a[2] - b[2]
  })

  return (
    <div>
      <Nav />
      <div className="container">
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Time (seconds)</th>
              <th scope="col">Level</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {scoresArray.map(score => <React.Fragment key={score[0]}><tr><td>{score[1]}</td><td><span>{("0" + Math.floor((score[2] / 60000) % 60)).slice(-2)}:</span><span>{("0" + Math.floor((score[2] / 1000) % 60)).slice(-2)}</span></td><td> {score[3]}</td></tr></React.Fragment>)}
          </tbody>
        </table>
        </div>
    </div>
  )
}

export default Leaderboard;
