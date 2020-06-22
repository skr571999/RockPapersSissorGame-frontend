import React from "react";
import "./Modal.css";

function ExitModal(props) {
  const { goToStart, userWinCount, totalCount } = props;
  return (
    <div className="resultMessage">
      <div className="message">
        <h2>Score Card</h2>
        <p>
          You Win {userWinCount} times from {totalCount}
        </p>
        <div className="yesNoBtns">
          <button onClick={goToStart} className="btn btn-outline-danger">
            Exit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExitModal;
