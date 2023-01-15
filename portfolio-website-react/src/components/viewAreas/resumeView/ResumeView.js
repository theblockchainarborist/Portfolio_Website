import React from 'react';
import DownloadButton from '../../downloadButton/DownloadButton';
import Resume from '../../resume/Resume';
import ReturnButton from '../../returnButton/ReturnButton';
import './ResumeView.css'




const ResumeView = () => {
    return (
        <div id="resume-view-main-div" className="content">
            <div id="resume-div" className="content-background">
                <Resume />
            </div>
            <div id="bottom-buttons-resume">
                {/* <DownloadBtn /> */}
                <DownloadButton />
                <ReturnButton />
                
            </div>
        </div>
    );
}

export default ResumeView;