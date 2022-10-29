import React from "react";
import { Link, useNavigate, redirect } from "react-router-dom";

function BottomNavbar() {
  let navigate = useNavigate();

  function handleClick(props) {
    const prefix_github_page = "/portfolio_website"
    const id = props.target.id
    navigate(`${prefix_github_page}/${id}`)
  }

  const prefix_github_page = "/portfolio_website"

  const link_clip = (
    <div className="mobile--bottomnav">
      <div className="mobile--nav--select">
        <Link to={`${prefix_github_page}/profile`} style={{textDecoration: "none"}}>
          <div className="mobile--nav--buttonbox">
            <img className="mobile--nav--buttonpic" src="./images/profile_icon.svg"></img>
            <p className="mobile--nav--button">Profile</p>
          </div>
        </Link>
        <Link to={`${prefix_github_page}/project`} style={{textDecoration: "none"}}>
          <div className="mobile--nav--buttonbox">
            <img className="mobile--nav--buttonpic" src="./images/project_icon.svg"></img>
            <p className="mobile--nav--button">Projects</p>
          </div>
        </Link>
        <Link to={`${prefix_github_page}/contact`} style={{textDecoration: "none"}}>
          <div className="mobile--nav--buttonbox">
            <img className="mobile--nav--buttonpic" src="./images/contact_icon.svg"></img>
            <p className="mobile--nav--button">Contact</p>
          </div>
        </Link>
      </div>
    </div>
  )

  const original_clip = (
    <div className="mobile--bottomnav">
      <div className="mobile--nav--select">
        <div className="mobile--nav--buttonbox">
          <img className="mobile--nav--buttonpic" src="./images/profile_icon.svg"></img>
          <button className="mobile--nav--button" id="profile" onClick={handleClick}>Profile</button>
        </div>
        <div className="mobile--nav--buttonbox">
          <img className="mobile--nav--buttonpic" src="./images/project_icon.svg"></img>
          <button className="mobile--nav--button" id="project" onClick={handleClick}>Projects</button>
        </div>
        <div className="mobile--nav--buttonbox">
          <img className="mobile--nav--buttonpic" src="./images/contact_icon.svg"></img>
          <button className="mobile--nav--button" id="contact" onClick={handleClick}>Contact</button>
        </div>
      </div>
    </div>
  )

  const new_clip = (
    <div className="mobile--bottomnav">
      <div className="mobile--nav--select">
        <Link to={`${prefix_github_page}/profile`} style={{textDecoration: "none"}}>
          <div className="mobile--nav--buttonbox">
            <img className="mobile--nav--buttonpic" src="./images/profile_icon.svg"></img>
            <p className="mobile--nav--button">Profile</p>
          </div>
        </Link>
        <Link to={`${prefix_github_page}/project`} style={{textDecoration: "none"}}>
          <div className="mobile--nav--buttonbox">
            <img className="mobile--nav--buttonpic" src="./images/project_icon.svg"></img>
            <p className="mobile--nav--button">Projects</p>
          </div>
        </Link>
        <Link to={`${prefix_github_page}/contact`} style={{textDecoration: "none"}}>
          <div className="mobile--nav--buttonbox">
            <img className="mobile--nav--buttonpic" src="./images/contact_icon.svg"></img>
            <p className="mobile--nav--button">Contact</p>
          </div>
        </Link>
      </div>
    </div>
  )

  return new_clip
}

export default BottomNavbar;