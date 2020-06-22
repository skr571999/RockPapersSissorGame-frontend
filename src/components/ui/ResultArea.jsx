import React from "react";
import Emoji from "./Emoji";

import "./ResultArea.css";

function ResultArea(props) {
  const { userInput, appInput } = props;
  return (
    <div className="resultArea">
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
