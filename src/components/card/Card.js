import React, { useState } from "react";
import styles from "./Card.module.css";
export default function Card(props) {
  const [answer, setAnswer] = useState(true);
  const [settingFalse, setsettingFalse] = useState(true);
  function Card() {
    function handleRight() {
      if (props.rightAnswer === "True") {
        setsettingFalse((prev) => (prev ? prev : !prev));
        setAnswer((prev) => !prev);
        props.correctCount();
      } else if (props.rightAnswer === "False") {
        setsettingFalse((prev) => (prev ? !prev : prev));
        setAnswer((prev) => !prev);
        props.incorrectCount();
      }
    }
    function handleWrong() {
      if (props.wrongAnswer == "True") {
        setsettingFalse((prev) => (prev ? prev : !prev));
        setAnswer((prev) => !prev);
        props.correctCount();
      } else if (props.wrongAnswer == "False") {
        setsettingFalse((prev) => (prev ? !prev : prev));
        setAnswer((prev) => !prev);
        props.incorrectCount();
      }
    }
    return (
      <main className={styles.cardBody}>
        <p className={styles.category}>Category {props.category}</p>
        <div className={styles.questionBody}>
          <p className={styles.question}>{props.question}</p>
        </div>
        <p
          onClick={() => {
            handleRight();
            props.score();
          }}
          className={styles.rightAnswer}
        >
          True
        </p>
        <p
          onClick={() => {
            handleWrong();
            props.score();
          }}
          className={styles.wrongAnswer}
        >
          False
        </p>
      </main>
    );
  }
  function Result() {
    return (
      <div
        style={{ backgroundColor: "#000033" }}
        className={styles.correctBody}
      >
        <h1 className="correct--text">
          {settingFalse ? (
            <div className="result--text">
              <div className="correct--mark">✔️</div>Correct, Next Question
            </div>
          ) : (
            <div className="result--text">
              <div className="incorrect--x">❌</div>Incorrect, Next Question
            </div>
          )}
        </h1>
      </div>
    );
  }
  const rendering = answer ? <Card /> : <Result />;
  return <div>{rendering}</div>;
}