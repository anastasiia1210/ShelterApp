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

const EditVolunteering = (props) => {
        useEffect(() => {
            fetch(`http://localhost:3001/volunteering/${props.id}`, { method: 'GET'}).then((res) => {
                    if (res.ok) {
                        return res.json();
                    }
                }
            ).then((jsonResponse) => {
                setFormData(jsonResponse)
            }).catch((er)=>{});
        }, [props.id]);  // useEffect on []

        const [formData, setFormData] = useState<Volunteering>({
            title: '',
            date: new Date,
            numberOfPeople: 0,
            address: '',
            description: ''
        });

    const cleanFormData= () => {
        formData.title= '';
        formData.date= new Date;
        formData.numberOfPeople= 0;
        formData.address= '';
        formData.description= '';
    }

    function datetimeLocal(datetime) {
        const dt = new Date(datetime);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        return dt.toISOString().slice(0, 16);
    }

    const changeVolunteering = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3001/volunteering/change/${props.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('chanhed data:', data);
                cleanFormData();
                props.setRefresh(props.refresh+1);
                props.setTrigger(false);
            })
            .catch((error) => {
                console.error('Error:', error);
            });}


    return (props.trigger) ? (
        <div className="login-page">
            <div className="form">
                <form className="login-form" onSubmit={changeVolunteering}>
                    <div className="forClose">
                        <button className="closeButton" onClick={() => {props.setTrigger(false); cleanFormData()}}>&times;</button>
                    </div>
                    <div className='textDiv'>
                        <label className='labels'>Назва:</label>
                        <input type="text" required value={formData.title}
                               onChange={(e) => setFormData({ ...formData, title: e.target.value})} />

                        <label className='labels'>Дата і час:</label>
                        <input type="datetime-local" required value={datetimeLocal(formData.date)}
                               onChange={(e) => setFormData({ ...formData, date: new Date(e.target.value)})}/>

                        <label className='labels'>Кількість людей:</label>
                        <input type="number" min={0} required value={formData.numberOfPeople}
                               onChange={(e) => setFormData({ ...formData, numberOfPeople: Number(e.target.value) })}/>

                        <label className='labels'>Адреса:</label>
                        <input type="text" required value={formData.address}
                               onChange={(e) => setFormData({ ...formData, address: e.target.value})} />

                        <label className='labels'>Опис:</label>
                        <input type="text" required value={formData.description}
                               onChange={(e) => setFormData({ ...formData,  description: e.target.value})} />
                    </div>
                    <button type="submit" className="okButton">Надіслати</button>
                </form>
            </div>
        </div>
    ) : "";
}
export default EditVolunteering;
