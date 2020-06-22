import React, { useState, useEffect } from "react";
import "./Play.css";
import ScoreArea from "../ui/ScoreArea";
import ResultArea from "../ui/ResultArea";
import InputArea from "../ui/InputArea";
import Modal from "../ui/Modal";
import ExitModal from "../ui/ExitModal";

function Play(props) {
  const [userInput, setUserInput] = useState("");
  const [appInput, setAppInput] = useState("");
  const [result, setResult] = useState(null);
  const [message, setMessage] = useState("");
  const [userWinCount, setUserWinCount] = useState(0);
  const [tiesCount, setTiesCount] = useState(0);
  const [appWinCount, setAppWinCount] = useState(0);
  const [showScoreCard, setshowScoreCard] = useState(false);

  useEffect(() => {
    if (result !== null) {
      setTimeout(() => {
        let messageText = "";
        if (result === 0) {
          messageText = "You Wins 🎈🎆🥳🎉🎊";
          setUserWinCount(userWinCount + 1);
        } else if (result === 1) {
          messageText = "Game Ties";
          setTiesCount(tiesCount + 1);
        } else {
          messageText = "App Wins";
          setAppWinCount(appWinCount + 1);
        }
        setMessage(messageText);
      }, 300);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

  const handlePlayNext = (status) => {
    if (status) {
      resetResult();
    } else {
      setMessage("");
      setshowScoreCard(true);
      // goToStart();
    }
  };

  const goToStart = () => {
    props.history.push("/start");
  };

  const resetResult = () => {
    setUserInput("");
    setAppInput("");
    setMessage("");
    setResult(null);
  };

  useEffect(() => {
    if (userInput) {
      const randInt = Math.floor((Math.random() * 10) / 3.5);
      const randomAppInput =
        randInt === 0 ? "R" : randInt === 1 ? "P" : randInt === 2 ? "S" : "";
      setAppInput(randomAppInput);
    }
  }, [userInput]);

  useEffect(() => {
    if (appInput) {
      if (userInput === appInput) setResult(1);
      else if (userInput === "R" && appInput === "P") setResult(2);
      else if (userInput === "R" && appInput === "S") setResult(0);
      else if (userInput === "P" && appInput === "R") setResult(0);
      else if (userInput === "P" && appInput === "S") setResult(2);
      else if (userInput === "S" && appInput === "R") setResult(2);
      else if (userInput === "S" && appInput === "P") setResult(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appInput]);

  return (
    <div>
      <ScoreArea
        userWinCount={userWinCount}
        tiesCount={tiesCount}
        appWinCount={appWinCount}
      />
      <ResultArea userInput={userInput} appInput={appInput} />
      <InputArea userInput={userInput} setUserInput={setUserInput} />
      {message && <Modal message={message} handlePlayNext={handlePlayNext} />}
      {showScoreCard && (
        <ExitModal
          userWinCount={userWinCount}
          totalCount={tiesCount + appWinCount + userWinCount}
          goToStart={goToStart}
        />
      )}
    </div>
  );
}

export default Play;
