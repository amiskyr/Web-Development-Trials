export default function Slots({ slot1, slot2, slot3 }) {
    const isMatching = slot1 === slot2 && slot1 === slot3;
    return (
        <div>
            <h1>{slot1} {slot2} {slot3}</h1>
            <h2 style={{ color: isMatching ? "green" : "red" }}>{isMatching ? "You Win!" : "You Lose!"}</h2>
            {isMatching ? <h3>Congrats</h3> : null}
        </div>
    );
}