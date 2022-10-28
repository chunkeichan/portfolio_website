import React from "react";
import { Link, useNavigate, redirect } from "react-router-dom";

function BottomNavbar() {
  let navigate = useNavigate();

  function handleClick(props) {
    const prefix_github_page = "/portfolio_website"
    const id = props.target.id
    navigate(`${prefix_github_page}/${id}`)
  }

  return (
    <div className="mobile--bottomnav">
      <div className="mobile--nav--select">
        <div className="nav--buttonbox">
          <img className="mobile--nav--buttonpic" src="./images/profile_icon.svg"></img>
          <button className="mobile--nav--button" id="profile" onClick={handleClick}>Profile</button>
        </div>
        <div className="nav--buttonbox">
          <img className="mobile--nav--buttonpic" src="./images/project_icon.svg"></img>
          <button className="mobile--nav--button" id="project" onClick={handleClick}>Projects</button>
        </div>
        <div className="nav--buttonbox">
          <img className="mobile--nav--buttonpic" src="./images/contact_icon.svg"></img>
          <button className="mobile--nav--button" id="contact" onClick={handleClick}>Contact</button>
        </div>
      </div>
    </div>
  )
}

export default BottomNavbar;