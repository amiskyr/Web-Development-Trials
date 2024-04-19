export default function Greeter({ person, from }) {
    return (
        <div>
            <h1>Hello there, {person}!</h1>
            <h2>-{from}</h2>
        </div>
    )
}