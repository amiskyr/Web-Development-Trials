export default function Die({ numSides }) {
    const roll = Math.floor((Math.random() * numSides) + 1);
    return <p className="Die">{numSides}-sided Die Roll: {roll}</p>
}