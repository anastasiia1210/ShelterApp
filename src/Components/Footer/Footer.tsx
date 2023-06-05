import React, {useState} from 'react';
import "./footer.css";
import { Icon } from '@iconify/react';
import RequestVolunteering from "../Request/RequestVolunteering";
import RequestSignIn from "../Request/RequestSignIn";
import {render} from "react-dom";
import { useNavigate } from 'react-router-dom';

const Footer = (props) => {
    const company = "Little fox";
    const phone = "+380976809114";
    const email = "shelter_kyiv@gmail.com";
    const year = new Date().getFullYear();
    const [buttonPopup, setButtonPopup] = useState (false);
    const navigate = useNavigate();
    const changePage = () => {
        navigate('/');
    };
    return (
        <footer>
            <div className="footer-content">

                <div className="footer-content__left">
                    <p>Телефонуйте: {phone}</p>
                    <p>Email: {email}</p>
                    <p>Графік роботи: 10:00-20:00 пн-сб</p>
                    <p className="copyright">&copy; {year} {company}. All rights reserved.</p>
                </div>
                <div className="footer-content__right">
                    <div className="icons">
                        <a href="https://www.instagram.com/zelenskiy_official/">
                            <Icon icon="mdi:instagram" />
                        </a>
                        <a href="https://t.me/V_Zelenskiy_official">
                            <Icon icon="mdi:telegram" />
                        </a>
                        <a href="https://www.facebook.com/zelenskiy.official/">
                            <Icon icon="mdi:facebook" />
                        </a>
                    </div>
                    <div className="sign-in-wrapper">
                        {!props.authUser ?  <button className="sign-in" onClick={() => {setButtonPopup(true)}}>Вхід</button>:
                        <button className="sign-in" onClick={()=>{changePage(); props.setAuthUser(false)}}>Вихід</button>}
                        <RequestSignIn trigger={buttonPopup} setTrigger={setButtonPopup} authUser={props.authUser} setAuthUser={props.setAuthUser}></RequestSignIn>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
