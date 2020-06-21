import React from "react";

import "./ScoreArea.css";

function ScoreArea(props) {
  const { userWinCount, tiesCount, appWinCount } = props;
  return (
    <div className="scoreArea">
      <div>
        <span>User Wins</span>
        <span>{userWinCount}</span>
      </div>
      <div>
        <span>Ties</span>
        <span>{tiesCount}</span>
      </div>
      <div>
        <span>App Wins</span>
        <span>{appWinCount}</span>
      </div>
    </div>
  );
}

export default ScoreArea;
