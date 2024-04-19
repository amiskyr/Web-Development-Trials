export default function ColorList({ colors }) {
    // this will map out the array elements into separate list-elements(<li>colors[i]</li>)
    const lis = colors.map((color) => <li>{color}</li>);
    return (
        <div>
            <p>Color List</p>
            {/* <ul>{lis}</ul> */}
            <ul>
                {colors.map((c) =>
                    <li style={{ color: c }}>{c}</li>
                )}
            </ul>
        </div>
    );
}