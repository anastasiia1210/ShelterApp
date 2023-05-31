import {FunctionComponent} from 'react';
import "./style.css";

const Request: FunctionComponent = () => {

    return (

        <div className="login-page">
            <div className="form">
                <form className="login-form">
                    <input type="text" placeholder="ПІБ" required/>
                    <input type="phone" placeholder="Телефон" required/>
                    <input type="phone" placeholder="Телефон" required/>
                    <button>Надіслати</button>
                </form>
            </div>
        </div>


    );
};

export default Request;
