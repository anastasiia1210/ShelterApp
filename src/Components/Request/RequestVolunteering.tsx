import React, {useEffect, useState} from 'react';
import "./style.css";
const RequestVolunteering = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        volunteeringId: 0
    });

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        formData.volunteeringId = props.id_volunteering;
        console.log(formData.volunteeringId+" = "+props.id_volunteering);
        // Send the form data to the server using fetch or axios
        fetch('http://localhost:3001/request.volunteering', {
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
                /*setFormData((prevFormData) => ({
                    ...prevFormData}));*/
                formData.name = '';
                formData.phone = '';
                formData.email = '';
                props.setTrigger(false);
            })
            .catch((error) => {
                // Handle any errors that occurred during the request
                console.error('Error:', error);
            });
        fetch(`http://localhost:3001/volunteering/${props.id_volunteering}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({}),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('change:', data.id);
              props.setPeople(data.numberOfPeople);
    });}

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
