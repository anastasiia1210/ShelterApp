import React, {FunctionComponent, useEffect, useState} from 'react';
import "./volunteering.css";
import DateComponent from "./DateComponent";
import {createBrowserRouter, Link, RouterProvider} from 'react-router-dom';
import RequestVolunteering from "../Request/RequestVolunteering";
import {render} from "react-dom";
import FormVolunteering from "../Request/FormVolunteering";

const VolunteeringRequests: FunctionComponent = () => {
    const [buttonPopup, setButtonPopup] = useState (false);
    const [requests, setRequests] = useState([]);
    const [id_volunteering, setIdVolunteering] = useState(-1);
    const [id_delete, setIdDelete] = useState(-1);
    const [add, setAdd] = useState(0);
    const[requestToChange, setRequestToChange] = useState(false);
    const [activityToChange, setActivityToChange] = useState({
        title: '',
        date: Date,
        numberOfPeople: '',
        address: '',
        description: ''
    });

    interface Activity{
        address: string;
        date:Date;
        description: string;
        id: number;
        numberOfPeople: number;
        title: string;
        isActive: boolean
    }
    interface Request{
        name: string;
        phone: string,
        email: string
    }
    const [data, setData] = useState([]);
    const [activities, setActivities] = useState([]);
    function setActivity(activity){
        if (activity.numberOfPeople == 0 || new Date(activity.date)<new Date()){
            return false
        }
        return true
    }
   function deleteVolunteering(id){
       const url = "http://localhost:3001/volunteering/"+id;
       fetch(url, {
           method: 'DELETE',
           parameter: id,
           headers: {
               'Content-Type': 'application/json',
               'API-Key': 'secret'
           }
       }).then(res => res.json()).then(data => (console.log(data)));
   }
    function takePeople(id){
        setRequests([]);
        const url = "http://localhost:3001/request.volunteering/"+id;
        fetch(url, {
            method: 'GET',
            parameter: id,
            headers: {
                'Content-Type': 'application/json',
                'API-Key': 'secret'
            }
        }).then(res => res.json()).then(data => {const array =
            data.map(i => ({
                name: i.name,
                phone: i.phone,
                email: i.email
            }))
            setRequests(array);
            console.log(array);
        });
}
    useEffect(() => {
        fetch("http://localhost:3001/volunteering", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'API-Key': 'secret'
            }
        })
            .then(res => res.json())
            .then(data => {
                setData(data);
                const activityArray = data.map(item => ({
                    address: item.address,
                    date: new Date(item.date),
                    description: item.description,
                    id: item.id,
                    numberOfPeople: item.numberOfPeople,
                    title: item.title,
                    isActive: setActivity(item)
                }));
                //activityArray = activityArray.filter((item) => item.isActive === true);
                activityArray.sort((a, b) => a.date - b.date);
                setActivities(activityArray);
            });
    console.log('useEffect');
    }, [id_delete, add]);

    {activities && activities.map(a => console.log(a))}


    return (
        <div className="table-wrapper">
            <div className="for-plus">
                <button className="button-plus" onClick={(e) => {setButtonPopup(true)}}>+</button>
            </div>
            <table className="volunteering_table">
                <tbody>
                {activities.map((activity) => (
                    <tr key={activity.id}>
                        <td>
                            <div>
                            <div className="activity-wrapper">
                                <div className="text-activity-div">
                                    <h2>{activity.title}</h2>
                                    <p>{activity.description}</p>
                                    <p>{<DateComponent date={activity.date} />}</p>
                                    <p><b>Де:</b> {activity.address}</p>
                                    <p><b>Скільки людей потрібно:</b> {activity.numberOfPeople}</p>
                                </div>
                                <div className="edit-button-div">
                                    <button id='show' className="edit-buttons" onClick={(e) => {setIdVolunteering(activity.id); takePeople(activity.id)}}>Зареєстровані</button>
                                    <button id='edit' className="edit-buttons" onClick={(e) => {setIdVolunteering(activity.id); setRequestToChange(true); setButtonPopup(true); setActivityToChange(activity);}}>Редагувати</button>
                                    <button id='remove' className="edit-buttons"onClick={(e) => {deleteVolunteering(activity.id); setIdDelete(activity.id)}}>Видалити</button>
                                   {/* <button id={activity.id} onClick={(e) => {setButtonPopup(true); setIdVolunteering(activity.id)}} className="registration-button"><b>Зареєструватися</b></button>*/}
                                </div>
                            </div>
                            <div className="div-requests">
                                    <div>
                                            {activity.id === id_volunteering && requests.length>0 &&
                                                requests.map((r) => (
                                                    <div className='volunt_data-div'>
                                                <p>ПІБ: {r.name}</p>
                                                <p>Телефон: {r.phone}</p>
                                               <p>Email: {r.email}</p>
                                                    </div>
                                           ))}
                                    </div>
                            </div>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <FormVolunteering trigger={buttonPopup} setTrigger={setButtonPopup} id_change={id_volunteering} add={add} setAdd={setAdd} data={activityToChange} setData={setActivityToChange} change={requestToChange} setChange={setRequestToChange}></FormVolunteering>
        </div>
    );
};

export default VolunteeringRequests;
