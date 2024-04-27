import { useState } from "react";

function generateGameBoard() {
    console.log("Making the Game Board!");
    return Array(500);
}

export default function InitializerDemo() {
    // const [board, setBoard] = useState(generateGameBoard()); // This will be called every time but the returned value will be ignored by useState, except for the first time.
    const [board, setBoard] = useState(generateGameBoard); // This will be called only once for the first time and it's value will be used as well

    return (
        <button onClick={() => setBoard("Hello")}>Click me to Change State</button>
    )
}