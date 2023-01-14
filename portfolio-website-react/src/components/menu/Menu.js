import React, { useState } from 'react';
import '../menu/Menu.css'

const Menu = (props) => {

    const [home, setHome] = useState(false);
    const [about, setAbout] = useState(false);
    const [examples, setExamples] = useState(false);
    const [resume, setResume] = useState(false);


    const toHomePage = () => {
        setHome(true);
        setAbout(false);
        setExamples(false);
        setResume(false);
        props.onStateChange({home,about,examples,resume});
        scrollDown();
    }
    const toAboutPage = () => {
        setAbout(true);
        setHome(false);
        setExamples(false);
        setResume(false);
        props.onStateChange({home,about,examples,resume});
        scrollDown();
    }
    const toExamplesPage = () => {
        setExamples(true);
        setHome(false);
        setAbout(false);
        setResume(false);
        props.onStateChange({home,about,examples,resume});
        scrollDown();
    }
    const toResumePage = () => {
        setResume(true);
        setHome(false);
        setAbout(false);
        setExamples(false);
        props.onStateChange({home,about,examples,resume});
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