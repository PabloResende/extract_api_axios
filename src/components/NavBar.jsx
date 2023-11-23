import { Link } from "react-router-dom";
import './NavBar.css'

import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h2>
        <Link to={"/"}>Blog</Link>
      </h2>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/new"} className="new-btn">
            Novo Poste
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
