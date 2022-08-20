import React from "react"
import styles from "./Start.module.css"
export default function Start(props) {
    return (
        <div className={styles.startBody}>
            <h1 className={styles.startLogo}>T<span className={styles.logoR}>r</span>iv<span className={styles.logoI}>i</span>a</h1>
            <h1 className={styles.startTitle}>Start Game</h1>
            <h1 className={styles.startRules}>You need at least 8 to win</h1>
            <button className={styles.startBtn} onClick={props.click} type="button">Start Game</button>
        </div>
    )
}