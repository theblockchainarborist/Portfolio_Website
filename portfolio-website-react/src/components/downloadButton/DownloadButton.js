import React, { useState, useEffect } from 'react';
import './DownloadButton.css'

const DownloadButton = () => {
    const [url, setUrl] = useState(null);
    useEffect(() => {
        async function fetchUrl() {
            const response = await fetch('../resume/Connor_Ray_Resume.pdf');
            const blob = await response.blob();
            const newUrl = URL.createObjectURL(blob);
            setUrl(newUrl);
        }
        fetchUrl();
    }, []);

    const handleClick = () => {
        // create an anchor element
        const a = document.createElement('a');

        // set the href and download attributes
        a.href = url;
        a.download = 'connor-ray-resume.pdf';

        // trigger a click event on the anchor element
        a.click();

        // revoke the object URL to free up memory
        URL.revokeObjectURL(url);
    };

    return (
        <div className="download-btn">
            <button id="btn-download" onClick={handleClick}>Download PDF</button>
        </div>
    );
}

export default DownloadButton;