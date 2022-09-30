import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function StartModal() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "none",
        }}>
          <Modal.Title>Pokemon Hunt!</Modal.Title>
        </Modal.Header>
        <Modal.Body   style={{
          display: "flex",
          justifyContent: "center",
        }}>Try and find all 3 listed pokemon as fast as possible!</Modal.Body>
        <Modal.Footer   style={{
          display: "flex",
          justifyContent: "center",
          border: "none",
        }}>
          <Button variant="secondary" onClick={handleClose} style={{backgroundColor: "#e4000f", border: "none"}}>
          Let's Go!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// function StartModal(props) {
//   return(
// <div className={props.show ? "modal show" : "modal"}>
//   <div className="modal-dialog">
//     <div className="modal-content">
//       <div className="modal-header">
//         <h5 className="modal-title">Pokemon Hunt!</h5>
//       </div>
//       <div className="modal-body">
//         <p>Try and find all 3 pokemon as fast as possible!</p>
//       </div>
//       <div className="modal-footer">
//         <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Let's Go!</button>
//       </div>
//     </div>
//   </div>
// </div>
//   )
// }

export default StartModal;
