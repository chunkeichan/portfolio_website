import React from "react";
import achievementDetails from './data/achievementDetails'

function Profile() {
  const profile_pic = '../images/DSCF9931_adjusted_9.jpg'
  const achievements = achievementDetails.map((achievement, index) => {
    const achievement_year = (<p className="profile--achievement--year">{achievement.year}</p>)
    const achievement_content = achievement.content.map(content => (
        <p className="profile--achievement--content">•{content}</p>
    ))

    return (
      <div>
      <div style={{display: "flex", alignItems: "center"}}>
        <div style={{width: "50%", textAlign: "center"}}>
          {index%2 === 0 ? achievement_year : achievement_content}
        </div>
        <div className="profile--achievement--line" style={{alignSelf: "center"}}></div>
        <div style={{width: "50%", textAlign: "center"}}>
          {index%2 === 0 ? achievement_content : achievement_year}
        </div>
      </div>
    </div>
    )
  }
)
  
  return (
    <div className="profilepage">
      <div className="profile">
        <img className="profile--pic" src={profile_pic}></img>
        <div className="profile--passages">
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
      <div className="profile--achievement">
        {/* Can use alignSelf to align different elements in different positions(e.g. center/stretch) when needed. */}
        {/* No need to use alignItems in the parent div anymore. */}
        <div className="profile--achievement--halfcircle" style={{alignSelf: "center"}}></div>
        <div className="profile--achievement--initline" style={{alignSelf: "center"}}></div>
        <div className="profile--achievement--circle" style={{alignSelf: "center"}}></div>
        {achievements}
        <div className="profile--achievement--midline" style={{alignSelf: "center"}}></div>
        <div className="profile--achievement--endline" style={{alignSelf: "center"}}></div>
      </div>
    </div>
  )
}

export default Profile