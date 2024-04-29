import "./Button.css"

export default function Button({ clickFunction, label = "Click" }) {
    return (
        <button className="Button" onClick={clickFunction}>
            {label}
        </button>
    )
}