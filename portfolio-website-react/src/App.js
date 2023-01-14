import './App.css';
import React, { useState } from 'react';
import Menu from './components/menu/Menu';
import HomeView from './components/viewAreas/homeView/HomeView';
import Footer from './components/footer/Footer';

function App() {

  const [mainDisplay, setMainDisplay] = useState('home');

  // 
  const handleMenuStateChange = (state) => {
    console.log(state);
    // Do something with state
}

  return (
    <div id="main-app-div">
      <div id="main-app-menu-div" className="header-img">
        <Menu onStateChange={(state) => handleMenuStateChange(state)} />
      </div>

      <div id="main-app-content-div" className="content-img">

        <div id="main-home-container" >
        { mainDisplay === 'home' && <HomeView /> }
        </div>

        <div id="main-about-container" >

        </div>

        <div id="main-examples-container" >

        </div>

        <div id="main-resume-container" >

        </div>
      
    </div>

    <div id="main-app-footer-div" class="footer-img">
      <Footer />
    </div>

  </div>

    
  );
}

export default App;
