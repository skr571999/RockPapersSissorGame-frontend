import React from "react";
import Emoji from "../ui/Emoji";

function Start(props) {
  const handleStartClick = () => {
    props.history.push("/play");
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
      </div>
    </div>
  );
}

export default Start;
