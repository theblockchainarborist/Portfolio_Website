import React from 'react';
import './Resume.css'

const Resume = () => {
    return (
        <div className="resume">
            <h1>Connor Ray</h1>
            <p className="resume-center">
                Life long learner and problem solver with background in customer service; effectively crafting solutions and products to meet client needs. Seeking an environment to develop and improve software products and services.
            </p>
            <h2 className="resume-section-header">TECHNICAL SKILLS</h2>
            <div className="resume-p-div">
                <p className="resume-description">● Spring Boot, Java, PostgreSQL, HTML, CSS, JavaScript, Vue.js, Responsive Design, IntelliJ, Git, Unit Testing (JUnit), E/R diagrams, Integration Testing, Unix</p>
            </div>
            <h2 className="resume-section-header">TECHNICAL EXPERIENCE</h2>
            <div className="resume-p-div">
                <p className="resume-description">
                    ● <strong> Superalgos </strong> - Open source algorithmic trading software written primarily in JavaScript and using Node.js. As a developer and moderator for the project my efforts have been focused between implementing new features, system hardening, and user support for the API / machine learning portions of the project.
                </p>
                <p className="resume-description">
                    ● <strong> VendingMachineInterface </strong> - A vending machine application written in Java. Created an application to manage a vending machine.
                </p>
                <p className="resume-description">
                    ● <strong> TEnmo </strong> - An API / application for sending and receiving TE-Bucks. This project utilizes Java and Spring Boot to simulate sending and receiving virtual cash!
                </p>
                <p className="resume-description">
                    ● <strong> ComicCollection </strong> - A full stack comic book collection management website. This project utilizes a PostgreSQL database, a Spring Boot REST API, and a Vue UI to allow users to manage comic book collections. 
                </p>
            </div>

            <h2 className="resume-section-header">EDUCATION</h2>

        <div id="resume-education-section-info">
            <p id="education-section-title-1"> <strong>Tech Elevator</strong>, Cleveland, OH</p>
            <p id="education-section-date-1"><strong>September 2022 – December 2022</strong></p>
        </div>

        <div className="resume-description-div">
            <p className="resume-description">
                A 14-week full-stack coding bootcamp covering how to create dynamic web-based software systems using
                Java providing 800+ hours of development education and application.
            </p>
        </div>


        <h2 className="resume-section-header">WORK EXPERIENCE</h2>
        
        <div id="resume-experience-section-info" className="experience-title-date">
            <div className="company-name-title">
                <p className="company-name"><strong>Ray Landscaping Services, Inc., Chardon, OH</strong></p>
                <p className="company-title">Operations Manager</p>
            </div>
            <p className="experience-date"><strong>April 2018 - November 2021</strong></p>
        </div>
        <div className="experience-bullet-points">
            <p className="bullet-points">● Consulted with prospective clients and generated work proposals</p>
            <p className="bullet-points">● Coordinated scheduling to meet customer needs and job site conditions</p>
            <p className="bullet-points">● Orchestrated employees; overseeing hiring and retention</p>
        </div>

        <div className="experience-title-date">
            <div className="company-name-title">
                <p className="company-name"><strong>Ray Landscaping Services, Inc., Chardon, OH</strong></p>
                <p className="company-title">Project Leader</p>
            </div>
            <p className="experience-date"><strong>April 2015 - March 2018</strong></p>
        </div>
        <div className="experience-bullet-points">
            <p className="bullet-points">● Directed team of 5 focusing on job site efficiency and quality control which resulted in 10% increase in sales</p>
            <p className="bullet-points">● Communicated with clients addressing job requirements and progression</p>
            <p className="bullet-points">● Documented daily tasks to ensure accurate billing and scheduling</p>
        </div>

    </div>

    )
}

export default Resume;