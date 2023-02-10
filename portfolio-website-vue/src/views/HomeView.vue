<template>
    <div id="home-view-div" class="content">

        <div class="content-background">
            <p id="welcome" class="section-title">Welcome!</p>
            <br>
            <p class="center-text">Hello, I am Connor Ray and this is my portfolio website! Here you will find information on my current ongoing projects, my past completed projects, and of course my current service offerings. If you would like to contact me to go over job opportunities or project requirements please find my relevant contact information at the bottom of this page! </p>

            <br>
            <div class="title-div">
                <p class="title underline">Current Service Offerings</p>
            </div>
            
            <p class="service-offerings">● Website design / build services</p>
            <p class="service-offerings">● Database design / build services</p>
            <p class="service-offerings">● REST API design / build services</p>
            <p class="service-offerings">● Website content updating services</p>
            <p class="service-offerings">● Mobile Web App Services</p>

            <br>
            <div class="title-div">
                <p class="title underline">Ongoing Projects</p>
            </div>
            <p class="no-margin">Please click any of the below thumbnails to view full page image.</p>
            
            <ongoing-projects-thumbnail />

        </div>
        
        <return-top-btn />

        <div>
            <full-screen-image />
        </div>
    
    </div>
</template>

<script>
import FullScreenImage from '../components/FullScreenImage.vue'
import MenuComponent from '../components/MenuComponent.vue'
import OngoingProjectsThumbnail from '../components/OngoingProjectsThumbnail.vue'
import ReturnTopBtn from '../components/ReturnTopBtn.vue'


export default {
  components: {MenuComponent, ReturnTopBtn, OngoingProjectsThumbnail, FullScreenImage},

}
</script>

<style>

#home-view-div {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.center-text {
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 7%;
    margin-right: 7%;
}

.service-offerings {
    font-size: 1vw;
}

.underline {
    border-bottom: solid white 2px;
    padding-bottom: 1%;
}

.title-div {
    display: flex;
    justify-content: center;
}

.no-margin {
    margin: 0px;
}


/* Mobile CSS */
@media (max-width: 1400px) {
    .service-offerings {
        font-size: 14px;
    }
}


</style>