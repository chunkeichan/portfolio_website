import React, {useState, useEffect} from 'react'
import Navbar from './components/Navbar';
import Profile from './webpages/Profile';
import Cover from './webpages/Cover';
import Contact from './webpages/Contact';
import Project from './webpages/Project';
import Webpages from './webpages';
import { BrowserView, MobileView, isMobile } from 'react-device-detect';
import { Helmet } from 'react-helmet';

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
      {/* <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>
      </Helmet> */}
      <MobileView><Webpages isMobile={true} /></MobileView>
      <BrowserView><Webpages isMobile={false} /></BrowserView>
    </div>

  // <div>
  // {isMobile ? (
  //   <div>This is a page with a window inner width of {window.innerWidth} which is smaller than 700.</div>
  //   ) : (
  //     <Webpages />
  //   )}
  // </div>
  );
}

export default App;
