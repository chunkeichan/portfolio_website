import React, { useEffect } from "react";
import achievementDetails from './data/achievementDetails';
import Aos from 'aos';
import "aos/dist/aos.css"

function Profile(props) {
  const isMobile = props.isMobile
  function checkIsMobile(class_name) {
    return isMobile ? `mobile--${class_name}` : `${class_name}`
  }
  
  // const profile_pic = '../images/DSCF9931_adjusted_9.jpg'
  const profile_pic = 'https://chunkeichan.github.io/portfolio_website/images/DSCF9931_adjusted_9.webp'
  const achievements = achievementDetails.map((achievement, index) => {
    const achievement_year = (<p className="profile--achievement--year">{achievement.year}</p>)

    const onLeftSide = (index%2 === 0)
    const achievement_content = achievement.content.map(content => (
        <p className={checkIsMobile("profile--achievement--content")} data-aos={onLeftSide ? "fade-left" : "fade-right"}>•{content}</p>
    ))

    return (
      <div>
      <div style={{display: "flex", alignItems: "center"}}>
        <div style={{width: "50%", textAlign: "center"}}>
          {onLeftSide ? achievement_year : achievement_content}
        </div>
        <div className={checkIsMobile("profile--achievement--line")} style={{alignSelf: "center"}}></div>
        <div style={{width: "50%", textAlign: "center"}}>
          {onLeftSide ? achievement_content : achievement_year}
        </div>
      </div>
    </div>
    )
  })

  function scrollUp(){ 
    window.scrollTo(0, 0);
  }

  return (
    <div className="profilepage">
      <div className={checkIsMobile("profile")} data-aos="fade-up" data-aos-anchor-placement="top-center">
        <img className={checkIsMobile("profile--pic")} src={profile_pic}></img>
        <div className={checkIsMobile("profile--passages")}>
          <p>Several years of experience in programming & project management. Currently working as a developer role on projects ranging from backend to data analytics.</p>
          <br/>
          <p>Skills & Competencies:</p>
          <p>- Backend Programming (Python/Node.js/Express)</p>
          <p>- Data Analysis (Python)</p>
          <p>- Database Skills (SQL)</p>
          <p>- Cloud services (Azure)</p>
          <p>- Robotic Process Automation</p>
        </div>
      </div>
      <div className="profile--halfcirclecontainer">
        <div className="profile--halfcircle"></div>
      </div>
      <div className={checkIsMobile("profile--achievement")}>
        {/* Can use alignSelf to align different elements in different positions(e.g. center/stretch) when needed. */}
        {/* No need to use alignItems in the parent div anymore. */}
        <div className="profile--achievement--halfcircle" style={{alignSelf: "center"}}></div>
        <div className="profile--achievement--initline" style={{alignSelf: "center"}}></div>
        <div className="profile--achievement--circle" style={{alignSelf: "center"}}></div>
        {achievements}
        <div className="profile--achievement--midline" style={{alignSelf: "center"}}></div>
        <div className="profile--achievement--endline" style={{alignSelf: "center"}}></div>
      </div>
      <img className="scrollUpButton" src="./images/button_slideUp_white.png" onClick={scrollUp} />
    </div>
  )
}

export default Profile


