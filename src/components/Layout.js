import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";

// const Main = styled.main`
//   background-color: black;
// `;

function Layout({children, isMobile}) {
  console.log(`Layout: ${isMobile}`)
  
  return (
    <React.Fragment>
      <Navbar isMobile={isMobile} />
      <main>{children}</main>
    </React.Fragment>
  )
}

export default Layout