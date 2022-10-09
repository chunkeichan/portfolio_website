import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom"

import Layout from "../components/Layout";

import Profile from './Profile';
import Cover from './Cover';
import Contact from './Contact';
import Project from './Project';

function Webpages() {
  const preffix_github_page = "/portfolio_website"
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path={`${preffix_github_page}/`} element={<Cover />} />
          <Route path={`${preffix_github_page}/profile`} element={<Profile />} />
          <Route path={`${preffix_github_page}/contact`} element={<Contact />} />
          <Route path={`${preffix_github_page}/project`} element={<Project />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default Webpages