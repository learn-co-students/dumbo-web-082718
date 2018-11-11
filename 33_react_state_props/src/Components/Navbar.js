import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
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
      <Link to="/login">
        <li className="navitem">Login</li>
      </Link>
    </ul>
  );
};

export default Navbar;
