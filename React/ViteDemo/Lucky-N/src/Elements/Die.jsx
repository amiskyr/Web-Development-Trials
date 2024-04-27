import "./Die.css"

export default function Die({ val, assignedColor = "slateblue" }) {
    return (
        <div
            className="Die"
            style={{ backgroundColor: assignedColor }}
        >
            {val}
        </div>
    )
}