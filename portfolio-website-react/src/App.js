import './App.css';
import React, { useState } from 'react';
import Menu from './components/menu/Menu';
import HomeView from './components/viewAreas/homeView/HomeView';
import Footer from './components/footer/Footer';
import AboutView from './components/viewAreas/aboutView/AboutView';
import ExamplesView from './components/viewAreas/examplesView/ExamplesView';
import ResumeView from './components/viewAreas/resumeView/ResumeView';

function App() {

  const [menuState, setMenuState] = useState({ home: true, about: false, examples: false, resume: false });


  const handleMenuStateChange = (state) => {
    setMenuState(state)
    console.log("Menu state change arrives " + JSON.stringify(menuState));
  }

  return (
    <div id="main-app-div">
      <div id="main-app-menu-div" className="header-img">
        <Menu onStateChange={(state) => handleMenuStateChange(state)} />
      </div>

      <div id="main-app-content-div" className="content-img">

        <div id="main-home-container" >
          { menuState.home === true && <HomeView /> }
        </div>

        <div id="main-about-container" >
          { menuState.about === true && <AboutView /> }
        </div>

        <div id="main-examples-container" >
          { menuState.examples === true && <ExamplesView /> }
        </div>

        <div id="main-resume-container" >
          { menuState.resume === true && <ResumeView /> }
        </div>
      
    </div>

    <div id="main-app-footer-div" class="footer-img">
      <Footer />
    </div>

  </div>

    
  );
}

export default App;
