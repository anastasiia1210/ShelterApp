import React, {FunctionComponent, useEffect, useState} from 'react';
import "./style.css";


const DeleteAnimalReq = (props) => {


    console.log(props.petId)

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3001/pets/${props.id}/req/delete`, {
            method: "DELETE",
        }).then((res) => {
            if(res.ok){props.setTrigger(false)}});
    };
    return (props.trigger) ? (
        <div className="login-page">

            <div className="form1">
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="forClose">
                        <button className="closeButton" onClick={() => props.setTrigger(false)}>&times;</button>
                    </div>
                    <h3>Ви впевнені, що хочете видалити цей запит?</h3>
                    <div className="columns">
                        <button className="okButton red" onClick={() => props.setTrigger(false)}>Ні</button>
                        <button type="submit" className="okButton">Так</button>
                    </div>

                </form>
            </div>
        </div>
    ) : "";
};

export default DeleteAnimalReq;
