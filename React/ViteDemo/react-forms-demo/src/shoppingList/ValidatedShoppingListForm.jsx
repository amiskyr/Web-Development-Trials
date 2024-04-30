import { useState } from "react";

export default function ValidatedShoppingListForm({ addItem }) {
    const [formData, setFormData] = useState({ product: "", quantity: 0 });
    const [productValidity, setProductValidity] = useState(false);

    const validateForm = (productName) => {
        if (productName.length === 0) {
            setProductValidity(false);
        }
        else {
            setProductValidity(true);
        }
    }
    const handleChange = (evt) => {
        if (evt.target.name === "product") {
            validateForm(evt.target.value);
        }
        setFormData(currItems => {
            return {
                ...currItems,
                [evt.target.name]: evt.target.value
            };
        });
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        // console.log("Submitted!");
        if (productValidity) {
            addItem(formData);
            setFormData({ product: "", quantity: 0 });
        }
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
            {
                !productValidity &&
                (<p style={{ color: "red" }}>Product name can't be empty</p>)
            }
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
            <button disabled={!productValidity}>Add Item</button>
        </form>
    );
}