import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom"
import Aos from 'aos';
import 'aos/dist/aos.css'

import Layout from "../components/Layout";

import Profile from './Profile';
import Cover from './Cover';
import Contact from './Contact';
import Project from './Project';

function Webpages(props) {
  const isMobile = props.isMobile
  const preffix_github_page = "/portfolio_website"

  useEffect(() => {
    Aos.init({duration: 1500});
  }, [])
  
  return (
    <Router>
      <Layout isMobile={isMobile}>
        <Routes>
          <Route exact path={`${preffix_github_page}/`} element={<Cover isMobile={isMobile} />} />
          <Route path={`${preffix_github_page}/profile`} element={<Profile isMobile={isMobile} />} />
          <Route path={`${preffix_github_page}/contact`} element={<Contact isMobile={isMobile} />} />
          <Route path={`${preffix_github_page}/project`} element={<Project isMobile={isMobile} />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default Webpages