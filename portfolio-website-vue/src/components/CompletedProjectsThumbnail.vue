<template>
    <div id="thumbnail-grid-div">
        <div v-for="thumbnail in allThumbnails" v-bind:key="thumbnail.id" class="thumbnail" v-on:click="displayImage(thumbnail.img)" >
       
        <p class="title">{{thumbnail.name}}</p>
            
                <img  v-bind:src="thumbnail.img" alt="Code Sandbox thumbnail" class="thumbnail-img"> 
            <p>{{thumbnail.description}}</p>    
        
        </div>
    </div>
</template>

<script>
import store from '../store/index';

export default {
  name: 'completed-projects-thumbnail',
  methods: {
    displayImage(img) {
        store.commit("SET_CURRENT_IMAGE_PATH", img);
        store.commit("SET_FULL_SCREEN_IMAGE", true);
    }
  }, 
  computed: {
    allThumbnails() {
      let thumbnails = this.$store.state.completedProjects;
      return thumbnails;
    }
  }
}
</script>

<style scoped>
    .thumbnail-img {
        width: 15vw;
        height: 12vw;
    }

    .thumbnail {
        display: flex;
        flex-direction: column;
        border: solid 3px black;
        width: 20vw;
        height: auto;
        padding: 1%;
        margin: 2%;
        background-color: rgba(0, 0, 0, 0.342);
        align-items: center;
        color: rgba(255, 255, 255, 0.87);
        text-decoration: none;
        cursor: pointer;
    }

    #thumbnail-grid-div {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
    }


     /* Mobile CSS */
    @media (max-width: 800px) {

        .thumbnail-img {
            width: 150px;
            height: 100px;
        }

        .thumbnail {
            display: flex;
            flex-direction: column;
            border: solid 3px black;
            width: 175px;
            height: auto;
            padding: 1%;
            margin: 2%;
            background-color: rgba(0, 0, 0, 0.342);
            align-items: center;
            color: rgba(255, 255, 255, 0.87);
            text-decoration: none;
        }

        #thumbnail-grid-div {
            display: grid;
            grid-template-columns: 1fr;
            justify-items: center;
        }
    }


</style>