import { useState } from "react";
import "./Box.css"

const generateRandomColor = (colors) => {
    const col = colors[Math.floor(Math.random() * colors.length)];
    return col;
}

export default function Box({ colors }) {
    const [color, setColor] = useState(generateRandomColor(colors));
    const changeColor = () => {
        setColor(generateRandomColor(colors));
    }
    const style = { backgroundColor: color }

    return (
        <div
            className="Box"
            style={style}
            onClick={changeColor}
        >
        </div>
    )
}