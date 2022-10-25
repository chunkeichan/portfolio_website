import React, {useState, useEffect} from 'react'
import Navbar from './components/Navbar';
import Profile from './webpages/Profile';
import Cover from './webpages/Cover';
import Contact from './webpages/Contact';
import Project from './webpages/Project';
import Webpages from './webpages';
import { MobileView, isMobile } from 'react-device-detect';

function App() {
  const [windowDimension, setWindowDimension] = useState(window.innerWidth)

  // useEffect(() => {
  //   function handleResize() {
  //     setWindowDimension(window.innerWidth)
  //   }
  //   // Check for the relationship between addEventListener and removeEventListener
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, [])

  // const isMobile = windowDimension <= 700 //640 for production

  return (
    <div>
      {isMobile ? (
        <div>This is a page with a window inner width of {window.innerWidth} which is smaller than 700.</div>
        ) : (
          <Webpages />
        )}
    </div>
  );
}

export default App;
