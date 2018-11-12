import React from "react";
import { Link } from "react-router-dom";
const Navbar = props => {
  return (
    <ul className="navbar">
      <Link to="/">
        <li className="navitem">Home</li>
      </Link>
      <Link to="/bey">
        <li className="navitem">Bey</li>
      </Link>
      <Link to="/jay">
        <li className="navitem">Jay</li>
      </Link>
      {localStorage.getItem("token") ? (
        <li className="navitem" onClick={props.handleLogout}>
          Logout
        </li>
      ) : (
        <Link to="/signup">
          <li className="navitem">Login/Sign Up</li>
        </Link>
      )}
    </ul>
  );
};

export default Navbar;
