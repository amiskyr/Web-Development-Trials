import { useState } from "react";

export default function Counter() {
    console.log("Rendered!");
    const [num, setNum] = useState(0);  // num = num + 1

    const addOne = () => {
        // re-render occurs every time as there's always a change in the value
        setNum(num + 1);    // num = 0
    }
    const addThree = () => {
        // re-render occurs every time as there's always a change in the value
        // setNum(num + 1);    // num = 0
        // console.log(num);
        // setNum(num + 1);    // num = 0
        // setNum(num + 1);    // num = 0
        setNum((currentCount) => currentCount + 1);
        console.log(num);
        setNum((currentCount) => currentCount + 1);
        setNum((currentCount) => currentCount + 1);
    }
    const setToTen = () => {
        setNum(10); // re-render occurs only once when value changes to 10 from something else
    }

    return (
        <div>
            <p>The count is: {num}</p>
            <button onClick={addOne}>+1</button>
            <button onClick={addThree}>+3</button>
        </div>
    );
}