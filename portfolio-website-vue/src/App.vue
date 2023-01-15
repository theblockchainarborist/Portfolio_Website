<script setup>
import HomeView from './views/HomeView.vue'
import ExamplesView from './views/ExamplesView.vue'
import MenuComponent from './components/MenuComponent.vue'
import AboutView from './views/AboutView.vue'
import ResumeView from './views/ResumeView.vue'
import ContactInfoComponent from './components/ContactInfoComponent.vue'
</script>

<template>
  <div id="main-app-div">
    <div id="main-app-menu-div" class="header-img">
      <menu-component />
    </div>

    <div id="main-app-content-div">

      <div id="main-home-container" v-if="$store.state.HomeViewVisible" class="content-img">
        <home-view />
      </div>

      <div id="main-about-container" v-if="$store.state.AboutViewVisible" class="content-img">
        <about-view />
      </div>

      <div id="main-examples-container" v-if="$store.state.ExamplesViewVisible" class="content-img">
        <examples-view />
      </div>

      <div id="main-resume-container" v-if="$store.state.ResumeViewVisible" class="content-img">
        <resume-view />
      </div>
      
    </div>

    <div id="main-app-footer-div" class="footer-img">
      <contact-info-component />
    </div>
    
    
    
  </div>

</template>

<style scoped>

#main-app-div {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: 
  'menu'
  'content'
  'end';
  position: absolute;
  width: 100%;
  background-clip: padding-box;
}

#main-app-menu-div {
  grid-area: menu;
  height: 95vh;

}

#main-app-content-div {
  grid-area: content;
  height: 100%;
  display: flex;
  min-height: 140vh;
}

#main-app-footer-div {
  grid-area: end;
  justify-self: center;
  bottom: 0;
}


.header-img {
  background: url('/SimonLee.jpg');
  background-size: 100% 259%;
  background-position: 100% 0%;
  width: 100%;
   background-clip: padding-box;
}

.content-img {
  height: fit-content;
  background: url('/SimonLee.jpg');
  background-size: 100% 175%;
  background-position: 0% 90%;
  width: 100%;
  min-height: 140vh;
   background-clip: padding-box;
}

.footer-img {
  background: url('/SimonLee.jpg');
  background-size: 100% 2000%;
  background-position: 0% 100%;
  width: 100%;
   background-clip: padding-box;
}


</style>
