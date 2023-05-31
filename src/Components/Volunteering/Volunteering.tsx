import React, { FunctionComponent } from 'react';
import "./volunteering.css";
import DateComponent from "./DateComponent";
import {createBrowserRouter, Link, RouterProvider} from 'react-router-dom';
import FormVolunteering from "../Forms/FormVolunteering";
import Animals from "../Animals/Animals";
const Volunteering: FunctionComponent = () => {
interface Activity{
    id: number
    title: string
    date: Date
    number_of_people: number
    address: string
    description: string
}
const exampleActivity: Activity = {
    id: 1,
    title: "Вигулювання собак",
    date: new Date(),
    number_of_people: 10,
    address: "вул. Лесі Українки 37, Київ",
    description: "Просимо усіх охочих погуляти з нашими собачками. Їм потрібна ваша турбота."
}
    const activities = [];
    for (let i = 0; i < 10; i++) {
        activities.push(exampleActivity);
    }
    return (
        <div className="table-wrapper">
        <table className="volunteering_table">
            <tbody>
            {activities.map((activity, index) => (
                <tr key={index}>
                    <td>
                        <div className="activity-wrapper">
                            <div className="text-activity-div">
                            <h2>{activity.title}</h2>
                            <p>{activity.description}</p>
                            <p>{<DateComponent date={activity.date} />}</p>
                            <p><b>Де:</b> {activity.address}</p>
                            <p><b>Скільки людей потрібно:</b> {activity.number_of_people}</p>
                            </div>
                           <div className="div-for-button">
                           <Link to="/formVolunteering">
                               <button className="registration-button"><b>Зареєструватися</b></button>
                           </Link>
                           </div>
                        </div>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
};

export default Volunteering;
