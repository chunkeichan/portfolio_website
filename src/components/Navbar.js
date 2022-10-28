import React from "react";
import { Link, useNavigate, redirect } from "react-router-dom";

// Jot notes - Link vs useNavigate() which can hide URL on hover
// const temp = (
//   <div className="nav">
//     <Link to="/" style={{textDecoration: "none"}}>
//       <p className="nav--subtitle">Chan Chun Kei</p>
//     </Link>
//     <div className="nav--select">
//       <Link to="/profile">
//         <button className="nav--button">Profile</button>
//       </Link>
//       <Link to="/project">
//       <button className="nav--button">Projects</button>
//       </Link>
//       <Link to="/contact">
//         <button className="nav--button">Contact</button>
//       </Link>
//     </div>
//   </div>
// )

function Navbar(props) {
  const isMobile = props.isMobile
  function checkIsMobile(class_name) {
    return isMobile ? `mobile--${class_name}` : `${class_name}`
  }
  console.log(`Navbar: ${isMobile}`)

  let navigate = useNavigate();

  function handleClick(props) {
    const prefix_github_page = "/portfolio_website"
    const id = props.target.id
    navigate(`${prefix_github_page}/${id}`)
  }

  const nav_content = (
    <div className="nav">
      <p className="nav--subtitle" id="" onClick={handleClick}>Chan Chun Kei</p>
      <div className="nav--select">
        <div className="nav--buttonbox">
          <button className="nav--button" id="profile" onClick={handleClick}>Profile</button>
        </div>
        <div className="nav--buttonbox">
          <button className="nav--button" id="project" onClick={handleClick}>Projects</button>
        </div>
        <div className="nav--buttonbox">
          <button className="nav--button" id="contact" onClick={handleClick}>Contact</button>
        </div>
      </div>
    </div>
  )

  const mobile_nav_content = (
    <div className="mobile--nav">
      <p className="mobile--nav--subtitle" id="" onClick={handleClick}>Chan Chun Kei</p>
    </div>
  )

  return isMobile ? mobile_nav_content : nav_content
}

export default Navbar;