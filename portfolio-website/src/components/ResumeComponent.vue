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
    margin: 0% 5%;
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

</style>