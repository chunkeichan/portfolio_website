import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";

// const Main = styled.main`
//   background-color: black;
// `;

function Layout({children}) {
  return (
    <React.Fragment>
      <Navbar />
      <main>{children}</main>
    </React.Fragment>
  )
}

export default Layout