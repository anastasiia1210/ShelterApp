import React, {FunctionComponent} from 'react';
import {useEffect, useState} from 'react';
import './style.css'
import {NavLink} from "react-router-dom";
import RequestAnimal from "../Request/RequestAnimal.tsx";
import EditAnimal from "../Request/EditAnimal.tsx";
import AddAnimal from "../Request/AddAnimal.tsx";
import DeleteAnimal from "../Request/DeleteAnimal.tsx";


interface PetInterface {
    id: number;
    name: string;
    age: number;
    photo: string;
    address: string;
    description: string;
    breed: string;
    type: string;
    sex: string;
    isActive: boolean;
}

const AnimalsAdmin: FunctionComponent = () => {

    const [buttonPopup, setButtonPopup] = useState(false);
    const [buttonDelPopup, setButtonDelPopup] = useState(false);
    const [buttonAddPopup, setButtonAddPopup] = useState(false);
    const [arr, setArr] = useState<PetInterface[]>([]);
    const [idPet, setIdPet] = useState(-1);
    useEffect(() => {
        fetch("http://localhost:3001/pets").then((res) => {
                console.log(res)
                if (res.ok) {
                    return res.json();
                }
            }
        ).then((jsonResponse) => {
            setArr(jsonResponse)
            arr.sort((a, b) => a.id - b.id);
        });
    }, [buttonAddPopup, buttonDelPopup, buttonPopup]);

    const [filterType, setFilterType] = useState('all');
    const [filterSex, setFilterSex] = useState('all');
    const [filterAge, setFilterAge] = useState('all');

    const filteredArr = arr.filter((x) => {
        if (filterType === 'кіт' || filterType === 'пес') {
            return x.type === filterType;
        } else {
            return x;
        }
    }).filter((x) => {
        if (filterSex === 'дівчинка' || filterSex === 'хлопчик') {
            return x.sex === filterSex;
        } else {
            return x;
        }
    }).filter((x) => {
        if (filterAge === '0-1') {
            return x.age === 0 || x.age === 1;
        } else if (filterAge === '2-3') {
            return x.age === 2 || x.age === 3;
        } else if (filterAge === '4+') {
            return x.age >= 4;
        } else {
            return x;
        }
    });

    return (
        <div className="frame">

            <section id="team" className="pb-5">

                <div className="container">
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet"
                          id="bootstrap-css"/>
                    <link rel="stylesheet"
                          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"/>

                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                    <div className="cont">
                        <button className="button-24 right" onClick={() => {
                            setButtonAddPopup(true);
                        }}><h3>Додати</h3></button>
                    </div>
                    <h5 className=" h1">Наші тваринки</h5>
                    <form action="#">
                        <div className="row">
                            <div className="select-box">

                                <label htmlFor="type" className="label select-box1"><span
                                    className="label-desc">Вид</span>
                                </label>
                                <select id="select-box1" className="select"
                                        onChange={(e) => setFilterType(e.target.value)}>
                                    <option value="all">Вид</option>
                                    <option value="кіт">Кіт</option>
                                    <option value="пес">Пес</option>
                                </select>

                            </div>
                            <div className="select-box">

                                <label htmlFor="select-box1" className="label select-box1"><span
                                    className="label-desc">Стать</span>
                                </label>
                                <select id="sex" className="select" onChange={(e) => setFilterSex(e.target.value)}>
                                    <option value="all">Стать</option>
                                    <option value="хлопчик">хлопчик</option>
                                    <option value="дівчинка">дічинка</option>
                                </select>

                            </div>
                            <div className="select-box">

                                <label htmlFor="select-box1" className="label select-box1"><span
                                    className="label-desc">Вік</span>
                                </label>
                                <select id="age" className="select" onChange={(e) => setFilterAge(e.target.value)}>
                                    <option value="all">Вік</option>
                                    <option value="0-1">0-1</option>
                                    <option value="2-3">2-3</option>
                                    <option value="4+">4+</option>
                                </select>

                            </div>
                        </div>
                    </form>
                    <div className="row">

                        {filteredArr.map((el) => {
                            return (
                                <div key={'infoOf' + el.id} className="col-xs-12 col-sm-6 col-md-4">
                                    <div className="image-flip">
                                        <div className="mainflip">
                                            <div className="frontside">
                                                <div className="card">
                                                    <div className="card-body text-center">
                                                        <p><img className=" img-fluid" src={el.photo}
                                                                alt="card image"/></p>
                                                        <h4 className="card-title">{el.name}</h4>
                                                        <p className="card-text">{el.type} / {el.age} / {el.sex}</p>
                                                        <span className="material-symbols-outlined">pets</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="backside">
                                                <div className="card">
                                                    <div className="card-body text-center mt-4">
                                                        <h4 className="card-title">{el.name}</h4>
                                                        <h5 className="card-text">{el.type}</h5>
                                                        <p className="card-text"><em>Вік:</em> {el.age}</p>
                                                        <p className="card-text"><em>Порода:</em> {el.breed}</p>
                                                        <p className="card-text"><em>Опис:</em> {el.description}</p>

                                                        <div className="columns">
                                                            <div>
                                                                <button onClick={() => {
                                                                    setButtonPopup(true);
                                                                    setIdPet(el.id);
                                                                }} className="button-24 "> Редагувати
                                                                </button>
                                                            </div>
                                                            <div>
                                                                <button onClick={() => {
                                                                    setButtonDelPopup(true);
                                                                    setIdPet(el.id);
                                                                }} className="button-24 red"> Видалити
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        }

                    </div>
                </div>
            </section>
            <EditAnimal trigger={buttonPopup} setTrigger={setButtonPopup} petId={idPet}></EditAnimal>
            <AddAnimal trigger={buttonAddPopup} setTrigger={setButtonAddPopup}></AddAnimal>
            <DeleteAnimal trigger={buttonDelPopup} setTrigger={setButtonDelPopup} petId={idPet}></DeleteAnimal>
        </div>
    );
};


export default AnimalsAdmin;
