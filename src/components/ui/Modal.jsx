import React from "react";
import "./Modal.css";

function Modal(props) {
  const { message, handlePlayNext } = props;
  return (
    <div className="resultMessage">
      <div className="message">
        <h2>{message}</h2>
        <p>Do you want to Play next Game??</p>
        <div className="yesNoBtns">
          <button
            onClick={() => handlePlayNext(true)}
            className="btn btn-outline-success"
          >
            Yes..
          </button>
          <button
            onClick={() => handlePlayNext(false)}
            className="btn btn-outline-danger"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
