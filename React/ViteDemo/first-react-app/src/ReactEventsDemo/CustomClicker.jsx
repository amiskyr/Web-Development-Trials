export default function CustomClicker({ message, buttonText }) {
    return (
        <button onClick={() => { alert(message) }}>{buttonText}</button>
    );
}