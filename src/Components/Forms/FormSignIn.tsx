import React, { useState } from 'react';
import "./formVolunteering.css"
const FormSignIn = () => {
    const [formData, setFormData] = useState({
        login: '',
        password: '',
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
            login: '',
            password: '',
        });
    };

    return (
            <form onSubmit={handleSubmit}>
                <div className="form-wrapper">
                    <div className="label-div">
                        <label htmlFor="login">Логін:</label>
                        <label htmlFor="password">Пароль:</label>
                    </div>
                    <div className="input-div">
                        <input
                            type="text"
                            id="login"
                            name="login"
                            value={formData.login}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <button className="submit-button" type="submit">OK</button>
                    </div>
                </div>
            </form>
    );
};

export default FormSignIn;
