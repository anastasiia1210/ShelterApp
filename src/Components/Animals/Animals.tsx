import {FunctionComponent} from 'react';
//import {useEffect, useState} from 'react';
import './style.css'
import {NavLink} from "react-router-dom";
//import Request from "./Request.tsx";

const Animals: FunctionComponent = () => {
    const arr = [{
        "id": 1,
        "name": "Max",
        "age": 2,
        "photo": "http://surl.li/hmcoq",
        "address": "123 Main Street",
        "description": "Friendly and playful dog Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium delectus doloremque quibusdam quidem? Accusantium eligendi repellat soluta voluptas voluptatibus?",
        "breed": "Labrador Retriever",
        "type": "Dog",
        "sex": "Male",
        "isActive": true
    },
        {
            "id": 2,
            "name": "Bella",
            "age": 4,
            "photo": "http://surl.li/hmcoq",
            "address": "456 Elm Street",
            "description": "Cute and affectionate cat lore",
            "breed": "Siamese",
            "type": "Cat",
            "sex": "Female",
            "isActive": true
        },
        {
            "id": 3,
            "name": "Rocky",
            "age": 1,
            "photo": "http://surl.li/hmcoq",
            "address": "789 Oak Street",
            "description": "Playful and energetic puppy",
            "breed": "Golden Retriever",
            "type": "Dog",
            "sex": "Male",
            "isActive": false
        },
        {
            "id": 3,
            "name": "Rocky",
            "age": 1,
            "photo": "http://surl.li/hmcoq",
            "address": "789 Oak Street",
            "description": "Playful and energetic puppy",
            "breed": "Golden Retriever",
            "type": "Dog",
            "sex": "Male",
            "isActive": false
        },
        {
            "id": 3,
            "name": "Rocky",
            "age": 1,
            "photo": "http://surl.li/hmcoq",
            "address": "789 Oak Street",
            "description": "Playful and energetic puppy",
            "breed": "Golden Retriever",
            "type": "Dog",
            "sex": "Male",
            "isActive": false
        }];

    const array = arr;



    const filterItems = (el:string) => {
    const newItem = array.filter((newVal) => {
        return newVal.type === el;
    });
    //setItem(newItem);
}
    return (
        <div className="frame">

            <section id="team" className="pb-5">

                <div className="container">
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                    <h5 className=" h1">Наші тваринки</h5>
                    <form action="#">
                        <div className="row">
                            <div className="select-box">

                                <label htmlFor="type" className="label select-box1"><span className="label-desc">Вид</span>
                                </label>
                                <select id="select-box1" className="select">
                                    <option value="кіт">Вид</option>
                                    <option value="кіт" onClick={() => filterItems("кіт")}>Кіт</option>
                                    <option value="пес" onClick={() => filterItems("пес")}>Пес</option>
                                </select>

                            </div>
                        <div className="select-box">

                            <label htmlFor="select-box1" className="label select-box1"><span className="label-desc">Стать</span>
                            </label>
                            <select id="sex" className="select">
                                <option value="хлопчик">хлопчик</option>
                                <option value="дівчинка">дічинка</option>
                            </select>

                        </div>
                        <div className="select-box">

                            <label htmlFor="select-box1" className="label select-box1"><span className="label-desc">Вік</span>
                            </label>
                            <select id="age" className="select">
                                <option value="0-1">0-1</option>
                                <option value="2-3">2-3</option>
                                <option value="4+">4+</option>
                            </select>

                        </div>

                        </div>
                    </form>
                    <div className="row">

                        {arr.map((el) => {
                            return (
                                <div className="col-xs-12 col-sm-6 col-md-4">
                                    <div className="image-flip">
                                        <div className="mainflip">
                                            <div className="frontside">
                                                <div className="card">
                                                    <div className="card-body text-center">
                                                        <p><img className=" img-fluid"
                                                                src={el.photo}
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

                                                        <form action="">
                                                            <NavLink to="/request">
                                                            <button type="submit" className="button-24 " role="button"> <h4 className = "upd">Хочу всиновити</h4>
                                                                <span className="material-symbols-outlined">pets</span>
                                                            </button></NavLink></form>
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
        </div>
    );
};


export default Animals;
