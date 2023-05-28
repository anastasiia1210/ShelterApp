import { FunctionComponent } from 'react';
import { NavLink } from "react-router-dom";
import "./styles.css";

const Header: FunctionComponent<never> = () => {

  return (
      <div className="header">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/animals">Animals</NavLink>
          </li>
        </ul>
      </div>
  );
};

export default Header;
