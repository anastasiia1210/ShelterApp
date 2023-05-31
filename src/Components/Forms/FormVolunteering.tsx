import React, { useState } from 'react';
import "./formVolunteering.css"
const FormVolunteering = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform registration logic with formData
        console.log(formData);
        // Reset form fields
        setFormData({
            name: '',
            phone: '',
            email: '',
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-wrapper">
            <div className="label-div">
                <label htmlFor="name">Ім'я:</label>
                <label htmlFor="phone">Телефон:</label>
                <label htmlFor="email">Email:</label>
            </div>
            <div className="input-div">
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <button className="submit-button" type="submit">OK</button>
            </div>
            </div>
        </form>
    );
};

export default FormVolunteering;
