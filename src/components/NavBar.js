import { nodeName } from 'jquery';
import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  textDecoration: "none",
}

const NavBar = () => {
  return (
    <div className="navbar">
      <li>
      {/*{code here}*/}
        <NavLink 
          to="/"
          exact
          style={link}
          >
            Home
        </NavLink>
      </li>
    
      <li>
        <NavLink
          to="/movies"
          exact
          style={link}
        >
          Movies
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/directors"
          exact
          style={link}
        >
          Directors
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/actors"
          exact
          style={link}
        >
          Actors
        </NavLink>
      </li>
    </div>
  );
};

export default NavBar;
