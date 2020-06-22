import React, { useState } from "react";
import Emoji from "../ui/Emoji";

function Start(props) {
  const handleStartClick = () => {
    props.history.push("/play");
  };

  const [userWinCount, setuserWinCount] = useState(
    localStorage.getItem("userWinCount")
  );
  const [totalPlay, settotalPlay] = useState(localStorage.getItem("totalPlay"));

  const resetScore = () => {
    localStorage.setItem("userWinCount", 0);
    localStorage.setItem("totalPlay", 0);
    setuserWinCount(0);
    settotalPlay(0);
  };

  return (
    <div className="container" style={{ height: "100vh" }}>
      <div className="row align-items-center justify-content-center flex-column h-100">
        <div className="text-center row align-items-center">
          <h2>
            To Play
            <Emoji emoji="👉" label="right-hand-arrow" />
          </h2>

          <button
            className="btn btn-outline-primary ml-4"
            onClick={handleStartClick}
          >
            Start the <Emoji emoji="🎮" label="Game" />
          </button>
        </div>
        <div className="scoreCard">
          <p>
            <b>Total Score</b>
          </p>
          <p>
            Total Win : {userWinCount || "0"} <br />
            Total Play : {totalPlay || "0"}
          </p>
          <p>
            <button onClick={resetScore} className="btn btn-outline-success">
              Reset
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Start;
