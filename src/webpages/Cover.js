import React from "react";
import { Link } from "react-router-dom";

function Cover() {
  return (
    // Review textDecoration
    <Link to="/profile" style={{textDecoration: "none"}}>
      <div className="cover">
        <h1>Chan Chun Kei</h1>
        <p>Data Engineer. Backend Developer. Project Manager.</p>
      </div>
    </Link>
  )
}

export default Cover