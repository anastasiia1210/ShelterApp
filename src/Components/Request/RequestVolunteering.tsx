import React, { useState } from 'react';
import "./style.css";
import volunteering from "../Volunteering/Volunteering";
const RequestVolunteering = (props) => {
    const [formData, setFormData] = useState({
        id: 0,
        name: '',
        phone: '',
        email: '',
        volunteering_id: props.id_volunteering
    });

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        console.log(formData);
        // Send the form data to the server using fetch or axios
        /*fetch('http://localhost:3001/volunteering-request', {
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
                    ...prevFormData,
                    id: prevFormData.id + 1,
                }));
            })
            .catch((error) => {
                // Handle any errors that occurred during the request
                console.error('Error:', error);
            });*/
    };

    return (props.trigger) ? (
        <div className="login-page">
            <div className="form">
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="forClose">
                        <button className="closeButton" onClick={() => props.setTrigger(false)}>&times;</button>
                    </div>
                    <input type="text" placeholder="ПІБ" required value={formData.name}
                           onChange={(e) => setFormData({ ...formData, name: e.target.value})} />
                    <input type="phone" placeholder="Телефон" required value={formData.phone}
                           onChange={(e) => setFormData({ ...formData, phone: e.target.value })}/>
                    <input type="email" placeholder="Email" value={formData.email}
                           onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>
                    <button type="submit" className="okButton">Надіслати</button>
                </form>
            </div>
        </div>
    ) : "";
}

export default RequestVolunteering;
