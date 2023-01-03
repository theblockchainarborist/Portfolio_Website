<template>
    <div id=footer-main-div>
        <div id="footer-title-div">
            <p id="contact-info-title">Contact Info</p>
        </div>
        <div id="contact-info-links" class="">

            
            <a href="mailto:connor2ray@gmail.com" title="Email" class="contact-icon-div">
                <img id="email-icon" src="../assets/EmailIcon.png" alt="Email" class="contact-icon">
            </a>
            

            <a id="github-link" href="https://github.com/theblockchainarborist" title="GitHub" class="contact-icon-div">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
            </a>


            <a href="https://www.linkedin.com/in/connor2ray" title="Linkedin" class="contact-icon-div">
                <img class="contact-icon" src="../assets/LinkedinIcon.png" alt="Linkedin">
            </a>


            <a href="tg://resolve?domain=theblockchainarborist" title="Telegram" class="contact-icon-div">
                <img class="contact-icon" src="../assets/TelegramIcon.png" alt="Telegram">
            </a>

        </div>
        
        <p class="attributes">
            Background Image by 
            <a href="https://unsplash.com/@simonppt" class="link">Simon Lee</a>
            on 
            <a href="https://unsplash.com/" class="link">unsplash.com</a> 
        </p>
    </div>
</template>

<script>

import EmailIcon from '../assets/EmailIcon.png'
import LinkedinIcon from '../assets/LinkedinIcon.png'
import TelegramIcon from '../assets/TelegramIcon.png'

export default {

}
</script>

<style>

#footer-main-div {
    text-align: center;
    width: 100%;
    align-items: center;
    padding-bottom: 1%;
}

#contact-info-title {
    font-family: 'Alegreya', serif;
    font-size: 1.2vw;
    font-weight: 500;
}

#github-link {
    color: white;
}

#footer-title-div {
    text-align: center;
    font-size: 1vw;
}

#contact-info-links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
}

.contact-icon {
    width: 50px;
    height: 50px;
}

.contact-icon-div {
    margin-right: 1%;
    margin-left: 1%;
}

#github-link {
    width: 50px;
}

.link {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.87);
}

.attributes {
    font-size: 12px;
    margin-top: 1%;
    margin-bottom: 0%;
}


/* Mobile CSS */
@media (max-width: 1400px) {

    #contact-info-title {
    font-family: 'Alegreya', serif;
    font-size: 18px;
    font-weight: 500;
}
}



</style>