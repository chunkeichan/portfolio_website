import React from "react";

function Contact() {
  const profile_pic = "../images/DSCF9931_adjusted_9.jpg"
  return (
    <div className="contact">
    <img className="contact--pic" src={profile_pic}></img>
    <div>
      <div className="contact--method">
        <img src="../images/logos_linkedin-icon.svg"></img>
        <p>chunkeichan1901@gmail.com</p>
      </div>
      <br/>
      <br/>
      <div className="contact--method">
        <img src="../images/line-md_email-twotone.svg"></img>
        <p>chunkeichan1901@gmail.com</p>
      </div>
    </div>
  </div>
  )
}

export default Contact