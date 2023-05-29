import React from 'react';
import "./footer.css";
import { Icon } from '@iconify/react';

const Footer: React.FC = () => {
    const company = "Little fox";
    const phone = "+380976809114"
    const email = "shelter_kyiv@gmail.com"
    const year = new Date().getFullYear();

    return (
        <footer>
            <div className="footer-content">

                <div className="contacts">
                    <p>Телефонуйте: {phone}</p>
                    <p>Email: {email}</p>
                    <p>Графік роботи: 10:00-20:00 пн-сб</p>
                    <p className="copyright">&copy; {year} {company}. All rights reserved.</p>
                </div>
                <div>
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
                </div>
            </div>
        </footer>
    );
};

export default Footer;
