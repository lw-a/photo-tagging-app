import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';

function EndModal(props) {
  const levelData = props.levelData
  const [score, setScore] = useState({
    name: '',
    level: levelData.name,
    time: props.time,
  })
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {

    setScore({ ...score, name: e.target.value, time: props.time  });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true)

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
    } finally {
      setIsSubmitting(false);
      navigate("/leaderboard")
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
      <form onSubmit={handleSubmit} style={{textAlign: "center"}}>
        <label htmlFor="nameInput" className="form-label">Enter your name to add this time to the ledaerboard!</label>
        <input type="text" className="form-control" name="nameInput" id="nameInput" placeholder="Ash Ketchum" onChange={handleInputChange} autoFocus></input>
        <button disabled={!score.name} type="submit" className="btn btn-secondary border-0 m-2" style={{backgroundColor: "#e4000f"}}>Submit and go to Scoreboard</button>
      </form>
      {isSubmitting && <h3>Submitting...</h3>}
        </Modal.Body>
        <Modal.Footer className={"d-flex border-0 justify-content-center p-1"}>
          <Link to="/"><button type="button" className="btn btn-secondary border-0" style={{backgroundColor: "#e4000f"}}>Home</button></Link>
          <button type="button" className="btn btn-secondary border-0" style={{backgroundColor: "#e4000f"}} onClick={props.startGame}>Replay</button>
        </Modal.Footer>
      </Modal>
  );
}


export default EndModal;
