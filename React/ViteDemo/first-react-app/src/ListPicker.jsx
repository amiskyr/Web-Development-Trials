export default function ListPicker({ values }) {
    const randIndex = Math.floor(Math.random() * values.length);
    const randElement = values[randIndex];
    return (
        <div>
            <p>The list of values: {values}</p>
            <p>Random element is: {randElement}</p>
        </div>
    );
}