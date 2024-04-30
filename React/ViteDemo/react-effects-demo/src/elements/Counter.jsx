import { useEffect, useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    /*
    // Right now this effect will be called after every render
    // useEffect(function myEffect() {
    //     console.log("My effect was called!");
    // });

    // this effect will be called only when there's a change in count or name
    // useEffect(
    //     function myEffect() {
    //         console.log("My effect was called!");
    //     },
    //     [count, name]
    // );
    */

    // this effect will be called only when there's a mounting(start) of component 
    useEffect(
        function myEffect() {
            console.log("My effect was called!");
        },
        []
    );


    const increment = () => {
        setCount((c) => c + 1);
    };
    const handleChange = (e) => {
        setName(e.target.value);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+1</button>
            <p>Name: {name}</p>
            <input
                value={name}
                onChange={handleChange}
                type="text"
            />
        </div>
    );
}
