import React from "react";

function Contact() {
  const profile_pic = "../images/DSCF9931_adjusted_9.jpg"
  return (
    <div className="contact">
    {/* <img className="contact--pic" src={profile_pic}></img> */}
    <img className="contact--pic" src="https://chunkeichan.github.io/portfolio_website/images/DSCF9931_adjusted_9.jpg"></img>
    
    <div>
      <div className="contact--method">
        {/* <img src="../images/logos_linkedin-icon.svg"></img> */}
        <img src="https://chunkeichan.github.io/portfolio_website/images/logos_linkedin-icon.svg"></img>
        <p>chunkeichan1901@gmail.com</p>
      </div>
      <br/>
      <br/>
      <div className="contact--method">
        {/* <img src="../images/line-md_email-twotone.svg"></img> */}
        <img src="https://chunkeichan.github.io/portfolio_website/images/line-md_email-twotone.svg"></img>
        <p>chunkeichan1901@gmail.com</p>
      </div>
    </div>
  </div>
  )
}

export default Contact