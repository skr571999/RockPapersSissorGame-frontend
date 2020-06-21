import React from "react";
import Emoji from "./Emoji";

import "./ResultArea.css";

function ResultArea(props) {
  const { userInput, appInput, message, handlePlayNext } = props;
  return (
    <div className="resultArea">
      {message && (
        <div className="resultMessage">
          <div className="message">
            <h2>{message}</h2>
            <p>Do you want to Play next Game??</p>
            <div className="yesNoBtns">
              <button
                onClick={() => handlePlayNext(true)}
                className="btn btn-outline-success"
              >
                Yes
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
      )}
      <div className="userArea">
        <Emoji
          emoji={
            userInput === "R"
              ? "✊"
              : userInput === "P"
              ? "✋"
              : userInput === "S"
              ? "✌"
              : "🎁"
          }
          label={
            userInput === "R"
              ? "rock"
              : userInput === "P"
              ? "paper"
              : userInput === "S"
              ? "scissor"
              : "box"
          }
        />
        {userInput && <span>Your's {userInput}</span>}
      </div>
      <div className="appArea">
        <Emoji
          emoji={
            appInput === "R"
              ? "✊"
              : appInput === "P"
              ? "✋"
              : appInput === "S"
              ? "✌"
              : "🎁"
          }
          label={
            appInput === "R"
              ? "rock"
              : appInput === "P"
              ? "paper"
              : appInput === "S"
              ? "scissor"
              : "box"
          }
        />
        {appInput && <span>App's {appInput}</span>}
      </div>
    </div>
  );
}

export default ResultArea;
