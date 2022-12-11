import React from "react";
import { Link } from "react-router-dom";

function Cover(props) {
  const isMobile = props.isMobile
  function checkIsMobile(class_name) {
    return isMobile ? `mobile--${class_name}` : `${class_name}`
  }
  const prefix_github_page = "" //"/portfolio_website"

  return (
    // Review textDecoration
    <Link to={`${prefix_github_page}/profile`} style={{textDecoration: "none"}}>
      <div className={checkIsMobile("cover")} data-aos="fade-up" data-aos-anchor-placement="top-center">
        <p>29</p>
        <h1>Chan Chun Kei</h1>
        <p>Data Engineer. Backend Developer. Project Manager.</p>
      </div>
    </Link>
    // <div className="cover" data-aos="fade-up" data-aos-anchor-placement="top-center">
    //   <Link to={`${preffix_github_page}/profile`} style={{textDecoration: "none"}}>
    //     <h1>Chan Chun Kei</h1>
    //     <p>Data Engineer. Backend Developer. Project Manager.</p>
    //   </Link>
    // </div>
  )
}

export default Cover