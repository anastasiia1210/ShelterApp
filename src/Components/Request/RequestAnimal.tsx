import React, {FunctionComponent, useEffect, useState} from 'react';
import "./style.css";

const RequestAnimal = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        petId: 0
    });
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        setFormData({ ...formData, petId: props.petId});
        // Send the form data to the server using fetch or axios
        fetch('http://localhost:3001/pets/request', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response from the server
                console.log('Response from server:', data);
                // Reset the form after successful submission
                setFormData((prevFormData) => ({
                    ...prevFormData}));
            })
            .catch((error) => {
                // Handle any errors that occurred during the request
                console.error('Error:', error);
            });
    };
    return (props.trigger) ? (
        <div className="login-page">
            <div className="form">
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="forClose">
                        <button className="closeButton" onClick={() => props.setTrigger(false) } >&times;</button>
                    </div>
                    <input type="text" placeholder="ПІБ" required onChange={(e) => setFormData({ ...formData, name: e.target.value})}/>
                    <input type="phone" placeholder="Телефон" required onChange={(e) => setFormData({ ...formData, phone: e.target.value})}/>
                    <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value})}/>
                    <button type="submit" className="okButton">Надіслати</button>
                </form>
            </div>
        </div>
    ) : "";
};

export default RequestAnimal;
