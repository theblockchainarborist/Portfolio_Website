import React, { useState, useEffect } from 'react';
import '../menu/Menu.css'

const Menu = (props) => {

    const [home, setHome] = useState(true);
    const [about, setAbout] = useState(false);
    const [examples, setExamples] = useState(false);
    const [resume, setResume] = useState(false);


    useEffect(() => {
        props.onStateChange({home,about,examples,resume});
    })


    const toHomePage = () => {
        setHome(true);
        setAbout(false);
        setExamples(false);
        setResume(false);
        scrollDown();
    }
    const toAboutPage = () => {
        setAbout(true);
        setHome(false);
        setExamples(false);
        setResume(false);
        scrollDown();
    }
    const toExamplesPage = () => {
        setExamples(true);
        setHome(false);
        setAbout(false);
        setResume(false);
        scrollDown();
    }
    const toResumePage = () => {
        setResume(true);
        setHome(false);
        setAbout(false);
        setExamples(false);
        scrollDown();
    }

    const scrollDown = () => {
        window.scrollTo(0, window.innerHeight);
    }

    return (
        <div id="menu-div">
            <div id="home" className="menu-item-div" onClick={toHomePage}>
                <p className="menu-font">Home</p>
            </div>
            <div id="menu-about-div" className="menu-item-div" onClick={toAboutPage}>
                <p className="menu-font">About</p>
            </div>
            <div id="menu-example-sites-div" className="menu-item-div" onClick={toExamplesPage}>
                <p className="menu-font">Example Websites</p>
            </div>
            <div id="resume" className="menu-item-div" onClick={toResumePage}>
                <p className="menu-font">Resume</p>
            </div>
        </div>
    );
}

export default Menu;