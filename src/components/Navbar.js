import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav">
      <Link to="/" style={{textDecoration: "none"}}>
        <p className="nav--subtitle">Chan Chun Kei</p>
      </Link>
      <div className="nav--select">
        <Link to="/profile">
          <button className="nav--button">Profile</button>
        </Link>
        <Link to="/project">
        <button className="nav--button">Projects</button>
        </Link>
        <Link to="/contact">
          <button className="nav--button">Contact</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar;