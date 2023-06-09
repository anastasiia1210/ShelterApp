import { FunctionComponent } from 'react';
import { NavLink } from "react-router-dom";
import "./header.css";

const UserHeader: FunctionComponent<never> = () => {
    return (
        <div className="header-wrapper">
            <nav>
                <ul className="header-nav">
                    <li>
                        <NavLink className="nav-link" to="/volunteeringRequests">Волонтерство</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/animals-admin">Тварини</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/animals-request">Запити</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="logo-wrapper">
                <img src="src/Images/logo-transparent-bg.png" alt="Logo" />
            </div>
        </div>
    );
};

export default UserHeader;
