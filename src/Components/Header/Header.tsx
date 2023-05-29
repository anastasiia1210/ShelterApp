import { FunctionComponent } from 'react';
import { NavLink } from "react-router-dom";
import "./styles.css";
import donate from "../Donate/Donate";

const Header: FunctionComponent<never> = () => {

  return (
      <div className="header">
        <ul>
          <li>
            <NavLink to="/">Головна</NavLink>
          </li>
          <li>
            <NavLink to="/animals">Тварини</NavLink>
          </li>
            <li>
                <NavLink to="/volunteering">Волонтерство</NavLink>
            </li>
            <li>
                <NavLink to="/donate">Допомога</NavLink>
            </li>
            <div className="logo"><img src="src/Images/logo.png" alt="React Image" /></div>
        </ul>
      </div>
  );
};

export default Header;
