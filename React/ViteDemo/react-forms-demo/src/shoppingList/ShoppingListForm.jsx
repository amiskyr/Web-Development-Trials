import { useState } from "react";

export default function ShoppingListForm({ addItem }) {
    const [formData, setFormData] = useState({ product: "", quantity: 0 });
    const handleChange = (evt) => {
        setFormData(currItems => {
            return {
                ...currItems,
                [evt.target.name]: evt.target.value
            };
        });
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log("Submitted!");
        addItem(formData);
        setFormData({ product: "", quantity: 0 });
    }
    return (
        <form onSubmit={handleSubmit}>
            {/* <h1>Product: {formData.product} Quantity: {formData.quantity}</h1> */}
            <label htmlFor="product">Product Name</label>
            <input
                id="product"
                type="text"
                name="product"
                placeholder="Product Name"
                onChange={handleChange}
                value={formData.product}
            >
            </input>
            <label htmlFor="quantity">Quantity</label>
            <input
                id="quantity"
                type="text"
                name="quantity"
                placeholder="Quantity"
                onChange={handleChange}
                value={formData.quantity}
            >
            </input>
            <button>Add Item</button>
        </form>
    );
}