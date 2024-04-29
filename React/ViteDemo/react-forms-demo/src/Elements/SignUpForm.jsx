import { useState } from "react";

export default function SignUpForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const updateFirstName = (ev) => {
        setFirstName(ev.target.value);
    }
    const updateLastName = (ev) => {
        setLastName(ev.target.value);
    }
    const handleSubmit = () => {
        console.log(`${firstName} ${lastName}`);
    }
    return (
        <div>
            <label htmlFor="firstName">First Name</label>
            <input
                id="firstName"
                type="text"
                placeholder="firstName"
                value={firstName}
                onChange={updateFirstName}
            />
            <label htmlFor="lastName">Last Name</label>
            <input
                id="lastName"
                type="text"
                placeholder="lastName"
                value={lastName}
                onChange={updateLastName}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}