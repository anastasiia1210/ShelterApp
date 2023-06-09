import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./style.css";
import {render} from "react-dom";
const RequestSignIn = (props) => {
    const [formData, setFormData] = useState({
        login: '',
        password: '',
    });
        const navigate = useNavigate();
        const changePage = () => {
            navigate('/volunteeringRequests');
        };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform registration logic with formData
        console.log(formData);
        // Reset form fields
        fetch('http://localhost:3001/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Response from server:', data);
                changePage();
                props.setAuthUser(true);
                setFormData((prevFormData) => ({
                    ...prevFormData}));
                props.setTrigger(false)
                setFormData({
                    login: '',
                    password: '',
                });
            })
            .catch((error) => {
               alert('Login or password is INCORRECT')
                console.error('Error:', error);
            });



    };

    return (props.trigger) ? (
        <div className="login-page">
            <div className="form">
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="forClose">
                        <button className="closeButton" onClick={() => {props.setTrigger(false); setFormData({
                            login: '',
                            password: '',
                        });}}>&times;</button>
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
