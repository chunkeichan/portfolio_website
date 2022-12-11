// Use button
// isToggle format: [{value: "All", toggled: true}]
import React, { useState } from "react";
import projectDetails from "./data/projectDetails";
import Popup from "reactjs-popup";

function Project(props) {
  const isMobile = props.isMobile
  function checkIsMobile(class_name) {
    return isMobile ? `mobile--${class_name}` : `${class_name}`
  }
  
  const category_list = ["All", "Data", "Project Management", "Backend"]
  const [selectedCategory, setSelectedCategory] = useState(["All"])
  const [isCategoryToggled, setIsCategoryToggled] = useState([{value: "All", toggled: true}])
  const [selectedElement, setSelectedElement] = useState(["All"])
  const [isElementToggled, setIsElementToggled] = useState([{value: "All", toggled: true}])
  const [searchContext, setSearchContext] = useState("")

  const handleSelected = (newSelected) => {
    const id = newSelected.target.id

    const selectedItem = (id==="category" ? selectedCategory : (id==="element" ? selectedElement : []))

    function setSelected(item) {
      if (id==="category") {
        return setSelectedCategory(item)
      } else if (id==="element") {
        return setSelectedElement(item)
      }
    }

    function setToggled(item) {
      if (id==="category") {
        return setIsCategoryToggled(item)
      } else if (id==="element") {
        return setIsElementToggled(item)
      }
    }

    const value = newSelected.target.value

    if (selectedItem.length===0) {
      setSelected([value])
      console.log(0)
      console.log(selectedItem)
    } else if (value==="All") {
      console.log(1)
      console.log(selectedItem)
      setSelected(["All"])
    } else if (selectedItem.includes("All")) {
      console.log(2)
      console.log(selectedItem)
      setSelected([value])
    } else {
      console.log(3)
      console.log(selectedItem)
      setSelected(preSelected => [...preSelected, value])
    }

    if (selectedItem.includes(value)) {
      setSelected(preSelected => preSelected.filter(item => item!==value))
    }

    // -----
    setToggled(preIsToggled => {
      // console.log(preIsToggled)
      // console.log(preIsToggled[0].toggled)    
      const preIsToggled_values = preIsToggled.map((item) => item.value)

      if (preIsToggled_values.includes("All")) {
        return (value==="All" ? preIsToggled : [{value: value, toggled: true}])
      } else if (value==="All") {
        return [{value: "All", toggled: true}]
      }

      if (preIsToggled_values.includes(value)) {
        const newisCategoryToggled = preIsToggled.map((item) => {
          return (item.value===value ? {...item, toggled: !item.toggled} : item)
        })
        return newisCategoryToggled
      } else {
        return [...preIsToggled, {value: value, toggled: true}]
      }
    })
  }
  
  const items_category = category_list.map(category => {
    const toggledItem = isCategoryToggled.find(item => item.value===category)
    const toggledTrigger = toggledItem===undefined ? false : toggledItem.toggled
    return <button className={checkIsMobile(toggledTrigger ? "project--button--toggled" : "project--button")} onClick={handleSelected} value={category} id="category">{category}</button>
  })

  const element_list = ["All", "Python", "javascript", "node.js", "express.js", "SQL", "Azure"]
  const items_element = element_list.map(element => {
    const toggledItem = isElementToggled.find(item => item.value===element)
    const toggledTrigger = toggledItem===undefined ? false : toggledItem.toggled
    return <button className={checkIsMobile(toggledTrigger ? "project--button--toggled" : "project--button")} onClick={handleSelected} value={element} id="element">{element}</button>
  })
  
  const item_list = projectDetails
  const items_item = item_list.map(item => {
    // Remark: To distinguish if the value = [], use .length is one feasible way.
    // console.log((selectedCategory.filter(selectedItem => item.category.includes(selectedItem))).length!==0)
    // console.log(selectedElement.filter(selectedItem => item.element.includes(selectedItem))!==[])
    if (
      (
      (selectedCategory.includes("All") &&
      (selectedElement.filter(selectedItem => item.element.includes(selectedItem))).length!==0) ||
      ((selectedCategory.filter(selectedItem => item.category.includes(selectedItem)).length!==0) && 
      (selectedElement.filter(selectedItem => item.element.includes(selectedItem))).length!==0) ||
      ((selectedCategory.filter(selectedItem => item.category.includes(selectedItem)).length!==0) &&
      selectedElement.includes("All")) ||
      (selectedCategory.includes("All") && selectedElement.includes("All"))
      ) &&
      (searchFunction(searchContext))
      ) {
      return (
        <div>
          <Popup
            trigger={
              <div className={checkIsMobile("project--item")}>
                <div className={checkIsMobile("project--item--picbox")}>
                  <img className={checkIsMobile("project--item--pic")} src={item.image}></img>
                </div>
                <div className={checkIsMobile("project--item--description")}>
                  <h2>{item.title}</h2>
                  <p>{isMobile ? "" : item.description}</p>
                  <p>{item.datetime}</p>
                </div>
              </div>
            }
            position="center center"
            modal
            >
            {close => (
              <div className="project--popup--bg" onClick={close}>
                <button className={checkIsMobile("close")} onClick={close}>
                  &times;
                </button>
                <div className={checkIsMobile("project--item--popup")}>
                  <img className={checkIsMobile("project--item--pic--popup")} src={item.image}></img>
                  <div className={checkIsMobile("project--item--description--popup")}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <p>{item.datetime}</p>
                  </div>
                </div>
              </div>
            )}
          </Popup>
          {/* Jot notes for style={{}} */}
          <hr style={{borderColor: "rgba(209, 209, 209, 0.274)"}} />
        </div>
      )
    }
  })

  function searchFunction(context) {
    const content = projectDetails.map(item => Object.values(item))
    const content_json = JSON.stringify(content)
    const content_json_lowercase = content_json.toLowerCase()
    const containContext = content_json_lowercase.includes(context.toLowerCase())
    console.log(containContext)
    return containContext
  }

  function handleSearchContext(props) {
    console.log(props.target.value)
    setSearchContext(props.target.value)
  }

  return (
    <div className={checkIsMobile("project")}>
      {/* <h2>selectedCategory: {selectedCategory}</h2> */}
      {/* <h2>isCategoryToggled: {JSON.stringify(isCategoryToggled)}</h2> */}
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
          <p className={checkIsMobile("project--title")}>Element:</p>
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
          <input className={checkIsMobile("project--searchbar")} type="search" onChange={handleSearchContext} placeholder={isMobile ? "Type something here ..." : "Type something here to filter projects ..."} value={searchContext}></input>
        </div>
      </div>      
      <br />
      <br />
      {items_item}
    </div>
  )
}

export default Project