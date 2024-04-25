import { useState } from "react";

export default function Counter() {
    const [num, setNum] = useState(5);  // num = num + 1
    console.log("component has been executed");
    console.log(`num: ${num}`)

    const changeNum = () => {
        setNum(num + 1);    // num = 5
        console.log("setNum has been called");
        console.log(`num: ${num}`)  // num = 5
    }

    return (
        <div>
            <p>The count is: {num}</p>
            <button onClick={changeNum}>Increment</button>
        </div>
    );
}