import React, {FunctionComponent} from 'react';
import "./style.css";

const RequestAnimal = (props) => {

    return (props.trigger) ? (
        <div className="login-page">
            <div className="form">
                <form className="login-form">
                    <div className="forClose">
                        <button className="closeButton" onClick={() => props.setTrigger(false) } >&times;</button>
                    </div>
                    <input type="text" placeholder="ПІБ" required/>
                    <input type="phone" placeholder="Телефон" required/>
                    <input type="phone" placeholder="Телефон" required/>
                    <button type="submit" className="okButton">Надіслати</button>
                </form>
            </div>
        </div>
    ) : "";
};

export default RequestAnimal;
