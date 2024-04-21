function handleClick() {
    console.log("Clicked the Button!")
}

function handleHover() {
    console.log("Hovering over!")
}

export default function Clicker() {
    return (
        <div>
            <p onMouseOver={handleHover}>Hover over here</p>
            <button onClick={handleClick}>Click</button>
        </div>
    );
}