import React, {FunctionComponent} from 'react';
import {useEffect, useState} from 'react';
import './style.css'
import {NavLink} from "react-router-dom";
import RequestAnimal from "../Request/RequestAnimal.tsx";
import DateComponent from "../Volunteering/DateComponent.tsx";
import RequestVolunteering from "../Request/RequestVolunteering.tsx";
import DeleteAnimalReq from "../Request/DeleteAnimalReq.tsx";
import ShowAnimal from "../Request/ShowAnimal.tsx";


interface PetReqInterface {
    id: number;
    name: string;
    phone: string;
    email?: string;
    petId: number;
}


const AnimalsRequest: FunctionComponent = () => {

    const [buttonPopup, setButtonPopup] = useState(false);
    const [idReq, setidReq] = useState(-1);
    const [buttonShowPopup, setButtonShowPopup] = useState(false);
    const [idPet, setIdPet] = useState(-1);
    const [arr, setArr] = useState<PetReqInterface[]>([]);
    useEffect(() => {
        fetch("http://localhost:3001/pets/request", {method: "GET"}).then((res) => {
                console.log(res)
                if (res.ok) {
                    return res.json();
                }
            }
        ).then((jsonResponse) => {
            setArr(jsonResponse)
        });
    }, [buttonPopup]);


    return (<div className="table-wrapper">
            <table className="volunteering_table">
                <tbody>
                {arr.map((el) => (
                    <tr key={"req" + el.id}>
                        <td>
                            <div className="activity-wrapper">
                                <div className="text-activity-div">
                                    <h2>{el.name}</h2>
                                    <p><b>Номер:</b> {el.phone}</p>
                                    <p><b>Email:</b> {el.email}</p>
                                    <p><b>ID тварини:</b> {el.petId}</p>
                                </div>
                                <div className="div-for-button">
                                    <div>
                                    <button onClick={(e) => {
                                        setButtonPopup(true); setidReq(el.id)
                                    }} className="button-24 red marg"><b>Видалити</b></button></div>
                                    <div><button onClick={(e) => {
                                        setButtonShowPopup(true); setIdPet(el.petId)
                                    }} className="button-24"><b>Переглянути</b></button></div>
                                </div>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <DeleteAnimalReq trigger={buttonPopup} setTrigger={setButtonPopup} id={idReq}></DeleteAnimalReq>
            <ShowAnimal trigger={buttonShowPopup} setTrigger={setButtonShowPopup} petId={idPet}></ShowAnimal>
        </div>
    );
};


export default AnimalsRequest;
