export default function Property({ name, rating, price }) {
    return (
        <div className="Property">
            <h2>{name}</h2>
            <p>${price} a night</p>
            <p>{rating}&#9733;</p>
        </div>
    )
}