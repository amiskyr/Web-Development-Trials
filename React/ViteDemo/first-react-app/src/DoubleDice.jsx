export default function DoubleDice() {
    const num1 = Math.floor((Math.random() * 3) + 1);
    const num2 = Math.floor((Math.random() * 3) + 1);
    const isWinner = num1 === num2;
    //Dynamic component Styles
    const styles = { color: isWinner ? "green" : "red" };

    return (
        <div className="DoubleDice" style={styles}>
            <h2>Double Dice</h2>
            { isWinner ? <h3>YOU WIN :)</h3> : <h3>YOU LOSE :(</h3>}
            <p>Num1: {num1}</p>
            <p>Num2: {num2}</p>
        </div>
    );
}