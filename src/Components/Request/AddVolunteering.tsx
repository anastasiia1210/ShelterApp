import React, {useEffect, useState} from 'react';
import "./style.css";
import {Simulate} from "react-dom/test-utils";
import change = Simulate.change;
import DateComponent from "../Volunteering/DateComponent";
interface Volunteering{
    title: string;
    date: Date;
    numberOfPeople: number;
    address: string;
    description: string;
}

const FormVolunteering = (props) => {
    const [formData, setFormData] = useState({
        title: '',
        date: new Date,
        numberOfPeople: '',
        address: '',
        description: ''
    });

    const cleanFormData= () => {
        formData.title= '';
        formData.date= new Date;
        formData.numberOfPeople= '';
        formData.address= '';
        formData.description= '';
    }

    const addVolunteering = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/volunteering', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Response from server:', data);
                cleanFormData();
                props.setRefresh(props.refresh+1);
                console.log('refresh = '+props.refresh)
                props.setTrigger(false);
            })
            .catch((error) => {
                console.error('Error:', error);
            });}

    return (props.trigger) ? (
        <div className="login-page">
            <div className="form">
                <form className="login-form" onSubmit={addVolunteering}>
                    <div className="forClose">
                        <button className="closeButton" onClick={() => {props.setTrigger(false); cleanFormData()}}>&times;</button>
                    </div>
                    <div className='textDiv'>
                        <label className='labels'>Назва:</label>
                        <input type="text" required
                               onChange={(e) => setFormData({ ...formData, title: e.target.value})} />

                        <label className='labels'>Дата і час:</label>
                        <input type="datetime-local"
                               onChange={(e) => setFormData({ ...formData, date: new Date(e.target.value)})}/>

                        <label className='labels'>Кількість людей:</label>
                        <input type="number" min={0} required
                               onChange={(e) => setFormData({ ...formData, numberOfPeople: e.target.value })}/>

                        <label className='labels'>Адреса:</label>
                        <input type="text" required
                               onChange={(e) => setFormData({ ...formData, address: e.target.value})} />

                        <label className='labels'>Опис:</label>
                        <input type="text" required
                               onChange={(e) => setFormData({ ...formData,  description: e.target.value})} />
                    </div>
                    <button type="submit" className="okButton">Надіслати</button>
                </form>
            </div>
        </div>
    ) : "";
}

export default FormVolunteering;
