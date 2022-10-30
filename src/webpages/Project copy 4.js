// Use button
// isToggled format: {All: true}
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
  const [selectedCategory, setSelectedCategory] = useState(["All"])
  const [isToggled, setIsToggled] = useState({All: true})

  const handleSelectedCategory = (newSelectedCategory) => {
    const category = newSelectedCategory.target.id
    // console.log(`selectedCategory: ${selectedCategory}`)
    // console.log(selectedCategory)
    // console.log(`category: ${newSelectedCategory.target.id}`)
    if (selectedCategory.length===0) {
      // console.log(0)
      setSelectedCategory([category])
    } else if (category==="All") {
      // console.log(1)
      if (selectedCategory.includes("All") && selectedCategory.length===1) {
        setSelectedCategory([])
      } else {
        setSelectedCategory(["All"])
      }
    } else if (selectedCategory.includes("All") && selectedCategory.length===1) {
      setSelectedCategory([category])
    } else {
      setSelectedCategory(preSelectedCategory => [...preSelectedCategory, category])
    }

    if (selectedCategory.includes(category)) {
      setSelectedCategory(preSelectedCategory => preSelectedCategory.filter(item => item!==category))
    }
    // console.log(event)
    // console.log(newSelectedCategory)
    // console.log(selectedCategory)

    // -----
    setIsToggled(preIsToggled => {
      console.log(preIsToggled)
      return {...preIsToggled, [category]: !preIsToggled[category]}
    })
  }

  const items_category = category_list.map(category => {
    return <button className={checkIsMobile(isToggled[category] ? "project--button--toggled" : "project--button")} onClick={handleSelectedCategory} id={category}>{category}</button>
  })

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
      <h2>{selectedCategory}</h2>
      <h2>{JSON.stringify(isToggled)}</h2>
      <h2>{isToggled.values}</h2>
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