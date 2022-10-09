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
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Cover />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default Webpages