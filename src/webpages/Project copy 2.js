// Solely use ToggleButtonGroup
import { React, useState } from "react";
import projectDetails from "./data/projectDetails";
import Button from "@mui/material/button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function Project(props) {
  const isMobile = props.isMobile
  function checkIsMobile(class_name) {
    return isMobile ? `mobile--${class_name}` : `${class_name}`
  }
  
  const category_list = ["All", "Data", "Project Management", "Backend"]
  const [selectedCategory, setSelectedCategory] = useState(["All"]);
  const handleSelectedCategory = (event, newSelectedCategory) => {
    console.log(selectedCategory)
    if (newSelectedCategory===["All"]) {
      console.log(0)
      setSelectedCategory([])
    } else (
      console.log(1)
      (newSelectedCategory.includes("All") ? setSelectedCategory(["All"]) : setSelectedCategory(newSelectedCategory))
    )
    // console.log(event)
    // console.log(newSelectedCategory)
    console.log(selectedCategory)
  }
  const items_category = category_list.map(category => (
    <ToggleButtonGroup
      value={selectedCategory}
      onChange={handleSelectedCategory}
      sx={{
        height: "30px",
        margin: "2px 3px",
        '& .MuiToggleButton-root': {
          // Remark: className might not be applicable for adjusting mui css elements.
          // className: checkIsMobile("project--button"),
          border: "none",
          borderRadius: "10px",
          backgroundColor: "rgba(209, 209, 209, 0.274)",
          padding: "0 15px",
          textTransform: "capitalize",
        },
      }}
    >
      <ToggleButton value={category}>{category}</ToggleButton>
    </ToggleButtonGroup>
  ))

  const element_list = ["All", "Python", "javascript", "node.js", "express.js", "SQL", "Azure"]
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
          <input className={checkIsMobile("project--searchbar")} type="search" placeholder={isMobile ? "Type something here ..." : "Type something here to filter projects ..."}></input>
        </div>
      </div>      
      <br />
      {items_item}
    </div>
  )
}

export default Project