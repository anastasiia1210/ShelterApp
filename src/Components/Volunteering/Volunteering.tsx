import React, {FunctionComponent, useEffect, useState} from 'react';
import "./volunteering.css";
import DateComponent from "./DateComponent";
import {createBrowserRouter, Link, RouterProvider} from 'react-router-dom';
import RequestVolunteering from "../Request/RequestVolunteering";

const Volunteering: FunctionComponent = () => {
    const [buttonPopup, setButtonPopup] = useState (false);
    const [id_volunteering, setIdVolunteering] = useState(-1);
    const [people, setPeople] = useState(0);
    interface Activity{
        address: string;
        date:Date;
        description: string;
        id: number;
        numberOfPeople: number;
        title: string;
        isActive: boolean
    }
    const [data, setData] = useState([]);
    const [activities, setActivities] = useState([]);
   function setActivity(activity){
       if (activity.numberOfPeople == 0 || new Date(activity.date)<new Date()){
          return false
       }
       return true
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
                let activityArray = data.map(item => ({
                    address: item.address,
                    date: new Date(item.date),
                    description: item.description,
                    id: item.id,
                    numberOfPeople: item.numberOfPeople,
                    title: item.title,
                    isActive: setActivity(item)
                }));
                activityArray = activityArray.filter((item) => item.isActive === true);
                activityArray.sort((a, b) => a.date - b.date);
                setActivities(activityArray);
            });
    }, [people]);

    {activities && activities.map(a => console.log(a))}


    return (
        <div className="table-wrapper">
        <table className="volunteering_table">
            <tbody>
            {activities.map((activity) => (
                <tr key={activity.id}>
                    <td>
                        <div className="activity-wrapper">
                            <div className="text-activity-div">
                            <h2>{activity.title}</h2>
                            <p>{activity.description}</p>
                            <p>{<DateComponent date={activity.date} />}</p>
                            <p><b>Де:</b> {activity.address}</p>
                            <p><b>Скільки людей потрібно:</b> {activity.numberOfPeople}</p>
                            </div>
                           <div className="div-for-button">
                               <button id={activity.id} onClick={(e) => {setButtonPopup(true); setIdVolunteering(activity.id)}} className="registration-button"><b>Зареєструватися</b></button>
                           </div>
                        </div>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
            <RequestVolunteering trigger={buttonPopup} setTrigger={setButtonPopup} id_volunteering={id_volunteering} people={people} setPeople={setPeople}></RequestVolunteering>
        </div>
    );
};

export default Volunteering;
