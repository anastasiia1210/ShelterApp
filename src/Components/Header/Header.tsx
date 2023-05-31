import { FunctionComponent } from 'react';
import { NavLink } from "react-router-dom";
import "./header.css";

const Header: FunctionComponent<never> = () => {

    return (
        <div className="header-wrapper">
            <nav>
                <ul className="header-nav">
                    <li>
                        <NavLink className="nav-link" to="/">Головна</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/animals">Тварини</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/volunteering">Волонтерство</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/donate">Допомога</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="logo-wrapper">
                <img src="src/Images/logo-transparent-bg.png" alt="Logo" />
            </div>
        </div>
    );
};

export default Header;
