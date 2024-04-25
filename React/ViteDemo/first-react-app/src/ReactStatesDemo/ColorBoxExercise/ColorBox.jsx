import Box from "./Box.jsx"
import "./ColorBox.css"

export default function ColorBox({ colorList, row, column }) {
    const boxes = [];
    for (let i = 0; i < row * column; i++) {
        boxes.push(< Box colors={colorList} />)
    }

    return (
        <div className="ColorBox">
            {boxes}
        </div>
    )
}