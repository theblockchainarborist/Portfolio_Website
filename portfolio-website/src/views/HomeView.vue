<template>
    <div id="home-view-div" class="content">

        <div class="content-background">
            <p id="welcome">Welcome!</p>
            <br>
            <br>
            <p>Hello, I am Connor Ray and this is my protfolio website! Here you will find information on my currently ongoing projects, my past completed projects, and of course my current service offerings. If you would like to contact me to go over job opportunities or project requirements please find my relevant contact information at the bottom of this page! </p>
        </div>
        
        <return-top-btn />
    
    </div>
</template>

<script>
import MenuComponent from '../components/MenuComponent.vue'
import ReturnTopBtn from '../components/ReturnTopBtn.vue'


export default {
  components: {MenuComponent, ReturnTopBtn},

}
</script>

<style>

#home-view-div {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#welcome {
    font-family: 'Alegreya', serif;
    font-size: 2.5vw;
}


</style>