import React, { useState } from "react";
import "./Give.css";

function Give() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        amount: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]:
            e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        window.location.href = "https://sandbox.flutterwave.com/donate/ppmrqld2mfx2";
    };

    return (
        <div className="give">
            <h2>Give to Support Our Church</h2>

            <div className="give-options">
                <button className="active">Give Once</button>
                <button>Monthly</button>
            </div>

            <form onSubmit={handleSubmit}
            className="give-form">
                <label>First Name</label>
                <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                required
                />

                <label>Last Name</label>
                <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                required
                />

                <label>Email Address</label>
                <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                />

                <label>Amount (NGN)</label>
                <input
                type="number"
                name="amount"
                value={form.amount}
                onChange={handleChange}
                required
                />

                <button type="submit"
                className="donate-btn">Donate</button>
            </form>
            <p className="secure"> Secured by Flutterwave</p>
        </div>
    );
}



export default Give;