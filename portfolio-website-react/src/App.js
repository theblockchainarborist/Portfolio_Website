import './App.css';
import React, { useState } from 'react';
import Menu from './components/menu/Menu';
import HomeView from './components/viewAreas/homeView/HomeView';
import Footer from './components/footer/Footer';
import AboutView from './components/viewAreas/aboutView/AboutView';
import ExamplesView from './components/viewAreas/examplesView/ExamplesView';
import ResumeView from './components/viewAreas/resumeView/ResumeView';

function App() {
  document.title = "connor-ray.com";

  const [menuState, setMenuState] = useState({ home: true, about: false, examples: false, resume: false });


  const handleMenuStateChange = (state) => {
    setMenuState(state)
  }

  return (
    <div id="main-app-div">
      {/* Menu Component / Header Background */}
      <div id="main-app-menu-div" className="header-img">
        <Menu onStateChange={(state) => handleMenuStateChange(state)} />
      </div>
      {/* Main Body Content / Background */}
      <div id="main-app-content-div" className="content-img">
        {/* HomeView Component */}
        <div id="main-home-container" >
          { menuState.home === true && <HomeView /> }
        </div>
        {/* AboutView Component */}
        <div id="main-about-container" >
          { menuState.about === true && <AboutView /> }
        </div>
        {/* ExamplesView Component */}
        <div id="main-examples-container" >
          { menuState.examples === true && <ExamplesView /> }
        </div>
        {/* ResumeView Component */}
        <div id="main-resume-container" >
          { menuState.resume === true && <ResumeView /> }
        </div>
      </div>
      {/* Footer Component / Background */}
      <div id="main-app-footer-div" class="footer-img">
        <Footer />
      </div>
    </div>
  );
}

export default App;
