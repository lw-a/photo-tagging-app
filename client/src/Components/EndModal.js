import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';

function EndModal(props) {
  const levelData = props.levelData
  const [score, setScore] = useState({
    name: 'Ash Ketchum',
    level: levelData.name,
    time: props.time,
  })

  const handleInputChange = (e) => {

    setScore({ ...score, name: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setScore({ ...score, time: parseInt(props.time) });

    try {
      const response = await window.fetch('/api/scores', {
        method: 'POST',
        body: JSON.stringify(score),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) throw Error(response.statusText);
    } catch (error) {
      console.error(error);
    }
  };

  return (
      <Modal show={props.show}  centered >
        <Modal.Header className={"d-flex border-0 justify-content-center align-items-center p-2"}>
          <Modal.Title><h2>Congratulations!</h2></Modal.Title>
        </Modal.Header>
        <Modal.Body className={"d-flex flex-column border-0 justify-content-center align-items-center p-0"}>
        <p>
        You caught all 3 Pokemon!
        </p>
        <p>
        <img src={levelData.first.sprite} alt =''></img><img src={levelData.second.sprite} alt =''></img><img src={levelData.third.sprite} alt =''></img>
        </p>
        <h3>Time Taken:</h3>
        <h4>{("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
      {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nameInput" className="form-label">Enter your name to add this time to the ledaerboard!</label>
        <input type="text" className="form-control" name="nameInput" id="nameInput" placeholder="Ash Ketchum" onChange={handleInputChange}></input>
        <button type="submit" className="btn btn-primary">Submit and go to Scoreboard</button>
      </form>
        </Modal.Body>
        <Modal.Footer className={"d-flex border-0 justify-content-center p-2"}>
          <Link to="/"><button type="button" className="btn btn-secondary border-0" style={{backgroundColor: "#e4000f"}}>Home</button></Link>
          <button type="button" className="btn btn-secondary border-0" style={{backgroundColor: "#e4000f"}} onClick={props.startGame}>Replay</button>
        </Modal.Footer>
      </Modal>
  );
}


export default EndModal;
