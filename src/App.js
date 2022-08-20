import React, { useState } from "react";
import Card from "./components/card/Card";
import Start from "./components/start/Start";
import { nanoid } from "nanoid";
import styles from "./App.module.css";

export default function App() {
  const [triviaData, setTriviaData] = useState({});
  const [startGame, setStartGame] = useState(true);
  React.useEffect(function () {
    fetch("https://opentdb.com/api.php?amount=10&category=23&type=boolean")
      .then((res) => res.json())
      .then((data) => setTriviaData(data.results));
  }, []);
  const allTenCards = [];
  for (let i = 0; i < triviaData.length; i++) {
    allTenCards.push(triviaData[i]);
  }
  const data = allTenCards.map((item) => {
    return (
      <Card
        key={nanoid()}
        category={item.category}
        type={item.type}
        question={item.question}
        rightAnswer={item.correct_answer}
        wrongAnswer={item.incorrect_answers}
        score={handleCount}
        correctCount={handleCorrectScore}
        incorrectCount={handleIncorrectScore}
      />
    );
  });

  let correctScore = 0;
  let incorrectScore = 0;

  function handleCorrectScore() {
    correctScore += 1;
    return correctScore;
  }

  function handleIncorrectScore() {
    incorrectScore += 1;
    return incorrectScore;
  }

  let count = 0;
  function handleCount() {
    count += 1;
    if (count === 10) {
      if (correctScore >= 8) {
        setTimeout(function () {
          if (
            alert(
              "You won. you got " +
                correctScore +
                " out of 10... click 'ok' to play again"
            )
          ) {
          } else window.location.reload();
        }, 5000);
      } else if (correctScore < 8) {
        setTimeout(function () {
          if (
            alert(
              "You Lost. you got " +
                incorrectScore +
                " out of 10... click 'ok' to play again"
            )
          ) {
          } else window.location.reload();
        }, 5000);
      }
    }
  }

  function handleStart() {
    setStartGame(!startGame);
  }
  const redering = startGame ? <Start click={handleStart} /> : data;

  return <div className={styles.wholeBody}>{redering}</div>;
}