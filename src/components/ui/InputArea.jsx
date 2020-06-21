import React from "react";
import Emoji from "./Emoji";

import "./InputArea.css";

function InputArea(props) {
  const { setUserInput } = props;
  return (
    <div className="inputArea">
      <div onClick={() => setUserInput("R")}>
        <Emoji emoji="✊" label="rock" />
        <span>R</span>
      </div>
      <div onClick={() => setUserInput("P")}>
        <Emoji emoji="✋" label="paper" />
        <span>P</span>
      </div>
      <div onClick={() => setUserInput("S")}>
        <Emoji emoji="✌" label="scissor" />
        <span>S</span>
      </div>
    </div>
  );
}

export default InputArea;
