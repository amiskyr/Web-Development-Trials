import { useState } from "react";

export default function BetterSignUpForm() {
    const [formData, setFormData] = useState({ firstName: "", lastName: "", password: "" });

    const handleChange = (ev) => {
        const changeFieldName = ev.target.name;
        const newValue = ev.target.value;
        // console.log(`${changeFieldName}-${newValue}`)
        setFormData(currData => {
            // currData[changeFieldName] = newValue;
            // return { ...currData };

            // [changeFieldName] will be evaluated first and it's computed property name will be used.
            return {
                ...currData,
                [changeFieldName]: newValue
            };
        });
    }
    const handleSubmit = () => {
        console.log(`${formData.firstName} ${formData.lastName} ${formData.password}`);
    }
    return (
        <div>
            <label htmlFor="firstName">First Name</label>
            <input
                id="firstName"
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange} //  shorthand form of passing function
                name="firstName"
            />
            <label htmlFor="lastName">Last Name</label>
            <input
                id="lastName"
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange} //  shorthand form of passing function
                name="lastName"
            />
            <label htmlFor="lastName">Last Name</label>
            <input
                id="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange} //  shorthand form of passing function
                name="password"
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}