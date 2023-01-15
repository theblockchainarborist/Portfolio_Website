import React from 'react';
import OngoingProjects from '../../projects/ongoingProjects/OngoingProjects';
import ReturnButton from '../../returnButton/ReturnButton';
import './HomeView.css';


const HomeView = () => {
    return (
        <div id="home-view-div" className="content">
            <div className="content-background">
                <p id="welcome" className="section-title">Welcome!</p>
                <br />
                <p className="center-text">Hello, I am Connor Ray and this is my portfolio website! Here you will find information on my current ongoing projects, my past completed projects, and of course my current service offerings. If you would like to contact me to go over job opportunities or project requirements please find my relevant contact information at the bottom of this page! </p>

                <br />
                <div className="title-div">
                    <p className="title underline">Current Service Offerings</p>
                </div>

                <p className="service-offerings">● Website design / build services</p>
                <p className="service-offerings">● Database design / build services</p>
                <p className="service-offerings">● REST API design / build services</p>
                <p className="service-offerings">● Website content updating services</p>
                <p className="service-offerings">● Mobile Web App Services</p>

                <br />
                <div className="title-div">
                    <p className="title underline">Ongoing Projects</p>
                </div>

                <OngoingProjects />

            </div>
            {/* Return top BTN here */}
            <ReturnButton />
        </div>
    );
};

export default HomeView;