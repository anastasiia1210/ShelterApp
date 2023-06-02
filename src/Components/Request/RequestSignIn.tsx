import React, { useState } from 'react';
import "./style.css";
const RequestSignIn = (props) => {
    const [formData, setFormData] = useState({
        login: '',
        password: '',
    });

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

    return (props.trigger) ? (
        <div className="login-page">
            <div className="form">
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="forClose">
                        <button className="closeButton" onClick={() => props.setTrigger(false)}>&times;</button>
                    </div>
                    <input type="text" placeholder="Логін" required value={formData.login}
                           onChange={(e) => setFormData({ ...formData, login: e.target.value })} />
                    <input type="password" placeholder="Пароль" required value={formData.password}
                           onChange={(e) => setFormData({ ...formData, password: e.target.value })}/>
                    <button type="submit" className="okButton">Надіслати</button>
                </form>
            </div>
        </div>
    ) : "";
};

export default RequestSignIn;
