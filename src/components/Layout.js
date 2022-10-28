import React from "react";
import Navbar from "./Navbar";
import BottomNavbar from "./BottomNavbar";
import styled from "styled-components";

// const Main = styled.main`
//   background-color: black;
// `;

function Layout({children, isMobile}) {
  console.log(`Layout: ${isMobile}`)
  
  return (
    <React.Fragment>
      {/* <Navbar isMobile={isMobile} />
      {isMobile ? <main className="mobile--main">{children}</main> : <main>{children}</main>} */}
      {isMobile ? <BottomNavbar /> : ""}
    </React.Fragment>
  )
}

export default Layout