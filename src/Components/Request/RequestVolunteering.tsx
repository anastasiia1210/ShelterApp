import React, {useEffect, useState} from 'react';
import "./style.css";
const RequestVolunteering = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        volunteeringId: 0
    });

    useEffect(() => {
        console.log(props.id_volunteering + " = " + formData.volunteeringId);
    }, [formData.volunteeringId]);

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        setFormData({ ...formData, volunteering_id: props.id_volunteering});
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
