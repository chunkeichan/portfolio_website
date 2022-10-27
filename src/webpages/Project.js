import React from "react";
import projectDetails from "./data/projectDetails"

function Project(props) {
  const isMobile = props.isMobile
  function checkIsMobile(class_name) {
    return isMobile ? `mobile--${class_name}` : `${class_name}`
  }
  
  const category_list = ["Data", "Project Management", "Backend", "All"]
  const items_category = category_list.map(category => (
    <button className={checkIsMobile("project--button")}>{category}</button>
  ))

  const element_list = ["Python", "javascript", "node.js", "express.js", "SQL", "Azure"]
  const items_element = element_list.map(element => (
    <button className={checkIsMobile("project--button")}>{element}</button>
  ))
  
  const item_list = projectDetails
  const items_item = item_list.map(item => (
    <div>
      <div className={checkIsMobile("project--item")}>
        <img src={item.image}></img>
        <div>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p>{item.datetime}</p>
        </div>
      </div>
      {/* Jot notes for style={{}} */}
      <hr style={{borderColor: "rgba(209, 209, 209, 0.274)"}} />
    </div>
  ))

  return (
    <div className={checkIsMobile("project")}>
      <div className={checkIsMobile("project--category")}>
        <div className="project--titlebox">
          <p className={checkIsMobile("project--title")}>Category:</p>
        </div>
        <div className="project--buttonbox">
          {items_category}
        </div>
      </div>
      <div className={checkIsMobile("project--elements")}>
        <div className="project--titlebox">
          <p className={checkIsMobile("project--title")}>Element(s):</p>
        </div>
        <div className="project--buttonbox">
          {items_element}
        </div>
      </div>
      <div className={checkIsMobile("project--search")}>
        <div className="project--titlebox">
          <p className={checkIsMobile("project--title")}>Search:</p>
        </div>
        <div className="project--searchbox">
          <input className={checkIsMobile("project--searchbar")} type="search" placeholder="Type something here to filter projects ..."></input>
        </div>
      </div>      
      <br />
      {items_item}
    </div>
  )
}

export default Project