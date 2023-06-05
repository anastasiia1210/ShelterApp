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
    console.log(props.title);

  const cleanFormData= () => {
      formData.title= '';
          formData.date= new Date;
      formData.numberOfPeople= '';
      formData.address= '';
      formData.description= '';
  }
  const handleSubmit = (e) => {
      if (props.change == true){
          changeVolunteering(e);
      } else {
          addVolunteering(e);
      }
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
                props.setAdd(props.add+1);
                props.setTrigger(false);
            })
            .catch((error) => {
                console.error('Error:', error);
            });}

    const changeVolunteering = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3001/volunteering/change/${props.id_change}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Response from server:', data);
                cleanFormData();
                props.setData(formData);
                props.setChange(false);
                props.setAdd(props.add+1);
                props.setTrigger(false);
            })
            .catch((error) => {
                console.error('Error:', error);
            });}


    return (props.trigger) ? (
        <div className="login-page">
            <div className="form">
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="forClose">
                        <button className="closeButton" onClick={() => {props.setTrigger(false); cleanFormData(); props.setData(formData)}}>&times;</button>
                    </div>
                    <div className='textDiv'>
                    <label className='labels'>Назва: {props.data.title}</label>
                    <input type="text" required
                           onChange={(e) => setFormData({ ...formData, title: e.target.value})} />
                    <label className='labels'><DateComponent date={props.data.date} /></label>
                    <input type="datetime-local" required
                           onChange={(e) => setFormData({ ...formData, date: new Date(e.target.value)})}/>
                    <label className='labels'>Кількість людей: {props.data.numberOfPeople}</label>
                    <input type="number" min={0} required
                           onChange={(e) => setFormData({ ...formData, numberOfPeople: e.target.value })}/>
                    <label className='labels'>Адреса: {props.data.address}</label>
                    <input type="text" required
                           onChange={(e) => setFormData({ ...formData, address: e.target.value})} />
                    <label className='labels'>Опис: {props.data.description}</label>
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
