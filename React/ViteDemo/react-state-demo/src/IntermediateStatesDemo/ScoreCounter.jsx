import { useState } from "react"

export default function ScoreCounter({ numPlayers = 3, winTarget = 5 }) {
    const [scores, setScores] = useState(new Array(numPlayers).fill(0));
    // const incrementScore = (idx) => {
    //     setScores((prevScores) => {
    //         const scoreCopy = [...prevScores];
    //         scoreCopy[idx] += 1;
    //         return scoreCopy;
    //     })
    // };

    const incrementScore = (idx) => {
        setScores((prevScores) => {
            return prevScores.map((currentScore, currentIndex) => {
                if (currentIndex === idx)
                    return currentScore + 1;
                return currentScore;
            })
        })
    }
    const resetScore = () => {
        setScores(new Array(numPlayers).fill(0));
    }

    return (
        <div>
            <h1>Score Counter</h1>
            <ul>
                {scores.map((score, index) => {
                    return (
                        <li key={index}>
                            Player-{index + 1}: {score}
                            <button onClick={() => incrementScore(index) + 1}>+1</button>
                            {score >= winTarget && "WINNER"}
                        </li> 
                    );
                })}
            </ul>
            <button onClick={resetScore}>Reset</button>
        </div>
    );
}