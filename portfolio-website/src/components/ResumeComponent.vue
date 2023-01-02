<template>
    <div class="resume">
        <h1>Connor Ray</h1>
        

        <p class="resume-center">Life long learner and problem solver with background in customer service; effectively crafting solutions and products to meet
client needs. Seeking an environment to develop and improve software products and services.</p>

        <h2 class="resume-section-header">TECHNICAL SKILLS</h2>
            <div class="resume-p-div">
                <p class="resume-description">● Spring Boot, Java, PostgreSQL, HTML, CSS, JavaScript, Vue.js, Responsive Design, IntelliJ, Git, Unit Testing (JUnit), E/R
                diagrams, Integration Testing, Unix</p>
            </div>
        

        <h2 class="resume-section-header">TECHNICAL EXPERIENCE</h2>
        <div class="resume-p-div">
            <p class="resume-description">
                ● <strong> Superalgos </strong> - Open source algorithmic trading software      written primarily in JavaScript and using Node.js. As a
                developer and moderator for the project my efforts have been focused between implementing new features, system
                hardening, and user support for the API / machine learning portions of the project.
            </p>
            <p class="resume-description">
                ● <strong> Capstone Project </strong> - A vending machine application written in Java. Created an application to manage a vending machine.
            </p>
            <p class="resume-description">
                ● <strong> Capstone Project </strong> - An API / application for sending and receiving TE-Bucks. This project utilizes Java and Spring Boot to simulate sending and receiving virtual cash!
            </p>
            <p class="resume-description">
                ● <strong> Capstone Project </strong> - A full stack comic book collection management website. This project utilizes a PostgreSQL database, a Spring Boot REST API, and a Vue UI to allow users to manage comic book collections. 
            </p>
        </div>
        

        


        <h2 class="resume-section-header">EDUCATION</h2>

        <div id="resume-education-section-info">
            <p id="education-section-title-1"> <strong>Tech Elevator</strong>, Cleveland, OH</p>
            <p id="education-section-date-1"><strong>September 2022 – December 2022</strong></p>
        </div>

        <div class="resume-description-div">
            <p class="resume-description">
                A 14-week full-stack coding bootcamp covering how to create dynamic web-based software systems using
                Java providing 800+ hours of development education and application.
            </p>
        </div>


        <h2 class="resume-section-header">WORK EXPERIENCE</h2>
        
        <div id="resume-experience-section-info" class="experience-title-date">
            <div class="company-name-title">
                <p class="company-name"><strong>Ray Landscaping Services, Inc., Chardon, OH</strong></p>
                <p class="company-title">Operations Manager</p>
            </div>
            <p class="experience-date"><strong>April 2018 - November 2021</strong></p>
        </div>
        <div class="experience-bullet-points">
            <p class="bullet-points">● Consulted with prospective clients and generated work proposals</p>
            <p class="bullet-points">● Coordinated scheduling to meet customer needs and job site conditions</p>
            <p class="bullet-points">● Orchestrated employees; overseeing hiring and retention</p>
        </div>

        <div class="experience-title-date">
            <div class="company-name-title">
                <p class="company-name"><strong>Ray Landscaping Services, Inc., Chardon, OH</strong></p>
                <p class="company-title">Project Leader</p>
            </div>
            <p class="experience-date"><strong>April 2015 - March 2018</strong></p>
        </div>
        <div class="experience-bullet-points">
            <p class="bullet-points">● Directed team of 5 focusing on job site efficiency and quality control which resulted in 10% increase in sales</p>
            <p class="bullet-points">● Communicated with clients addressing job requirements and progression</p>
            <p class="bullet-points">● Documented daily tasks to ensure accurate billing and scheduling</p>
        </div>

    </div>
</template>

<script>
export default {
    name: 'resume'
}
</script>

<style>

.resume {
    margin: 3%;
    font-family: 'Alegreya', serif;
    font-size: 1em;
}

.resume-center {
    margin: 0% 10%;
}

.resume-section-header {
    display: flex;
    border-bottom: solid 1px white;
    justify-content: left;
    padding-left: 2%;
    margin-bottom: 0;
    margin-top: 2%;
}

#resume-education-section-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
    'title date';
}

#education-section-title-1 {
    grid-area: title;
    justify-self: left;
    padding-left: 2%;
}

#education-section-date-1 {
    grid-area: date;
    justify-self: right;
    padding-right: 2%;
}

.resume-description-div {
    margin-left: 2%;
    width: auto;
    text-justify: left;
}

.resume-description {
    margin-top: 0;
    text-align: left;
}

.resume-p-div {
    margin-top: 1%;
    width: auto;
    padding-left: 1%;
    padding-right: 1%;
}

.experience-title-date {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
    'company date'
    'job-title .';
}

.company-name-title {
    grid-area: company;
    display: flex;
    flex-direction: column;
    padding-left: 2%;
    margin-bottom: 0px;
    text-align: left;
}

.experience-date {
    grid-area: date;
    text-align: right;
    padding-right: 2%;
}

.company-name {
    height: auto;
    margin-bottom: 0px;
}

.company-title {
    height: auto;
    margin-top: 2px;
}

.experience-bullet-points {
    text-align: left;
    margin-left: 1%;
    margin-bottom: 2%;
}

.bullet-points {
    margin-top: 2px;
    margin-bottom: 2px;
}

.resume p {
    font-family: 'Alegreya', serif;
    font-size: 17px;
}


</style>