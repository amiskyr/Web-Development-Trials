import { useState } from "react";

export default function ScoreKeeper() {
    const [scores, setScores] = useState({ p1Score: 0, p2Score: 0 });
    function increaseP1Score() {
        // Theoretically it should work but it doesn't 
        // scores.p1Score += 1;
        // console.log(scores);
        // setScores(scores);

        // Following approach will work
        // const newScores = { ...scores, p1Score: scores.p1Score + 1 };
        // setScores(newScores);

        // callback syntax to do the same
        setScores((oldScores) => {
            return { ...oldScores, p1Score: oldScores.p1Score + 1 };
        });
    }

    function increaseP2Score() {
        setScores((oldScores) => {
            return { ...oldScores, p2Score: oldScores.p2Score + 1 };
        });
    }

    return (
        <div>
            <p>Player 1: {scores.p1Score}</p>
            <p>Player 2: {scores.p2Score}</p>
            <button onClick={increaseP1Score}>+1 Player 1</button>
            <button onClick={increaseP2Score}>+1 Player 2</button>
        </div>
    );
}