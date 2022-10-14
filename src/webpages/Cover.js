import React from "react";
import { Link } from "react-router-dom";

function Cover() {
  const preffix_github_page = "/portfolio_website"
  return (
    // Review textDecoration
    <Link to={`${preffix_github_page}/profile`} style={{textDecoration: "none"}}>
      <div className="cover">
        <h1>Chan Chun Kei</h1>
        <p>Data Engineer. Backend Developer. Project Manager.</p>
      </div>
    </Link>
    // <div className="cover">
    //   <Link to={`${preffix_github_page}/profile`} style={{textDecoration: "none"}}>
    //     <h1>Chan Chun Kei</h1>
    //     <p>Data Engineer. Backend Developer. Project Manager.</p>
    //   </Link>
    // </div>
  )
}

export default Cover