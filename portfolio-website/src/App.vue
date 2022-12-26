<script setup>
import HelloWorld from './components/HelloWorld.vue'
import HomeView from './views/HomeView.vue'
import AniketDeole from '/AniketDeole.jpg'
import MenuComponent from './components/MenuComponent.vue'
import AboutView from './views/AboutView.vue'
import ResumeView from './views/ResumeView.vue'
</script>

<template>
  <div id="main-app-div">
    <div id="main-app-menu-div">
      <menu-component />
    </div>

    <div id="main-app-content-div">

      <div id="main-home-container" v-if="this.$store.state.HomeViewVisible">
        <home-view />
      </div>

      <div id="main-about-container" v-if="this.$store.state.AboutViewVisible">
        <about-view />
      </div>

      <div id="main-resume-container" v-if="this.$store.state.ResumeViewVisible">
        <resume-view />
      </div>
      
    </div>

    <div id="main-app-footer-div">
      <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
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
  height: 100%;
  width: 100%;
}

#main-app-menu-div {
  grid-area: menu;
  height: 95vh;
}

#main-app-content-div {
  grid-area: content;
  height: 140vh;
}

#main-app-footer-div {
  grid-area: end;
  justify-self: center;
  height: 13vh;
  bottom: 0;
}




.logo {
  height: 6em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
