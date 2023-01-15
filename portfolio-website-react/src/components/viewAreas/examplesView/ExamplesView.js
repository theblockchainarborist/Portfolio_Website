import React from 'react';
import PastProjects from '../../projects/pastProjects/PastProjects';
import ReturnButton from '../../returnButton/ReturnButton';
import './ExamplesView.css'


const ExamplesView = () => {
    return (
        <div id="examples-view-main-div" className="content" >
            <div id="examples-div" className="content-background" >
                <p id="example-websites-title" className="section-title">Example Websites</p>
                <br />
                <p>Please click any of the below thumbnails to view the project on CodeSandBox.io.</p>
                <br />
                <div>
                    <PastProjects />
                </div>
            </div>
            <ReturnButton />
        </div>
    );
}

export default ExamplesView;