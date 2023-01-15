<template>
    <div id="thumbnail-grid-div">
        <a v-bind:href="thumbnail.link" v-for="thumbnail in ongoingProjectThumbnails" v-bind:key="thumbnail.id" class="thumbnail">
       
        <p class="title">{{thumbnail.name}}</p>
            
                <img v-bind:src="thumbnail.img" alt="Code Sandbox thumbnail" class="thumbnail-img"> 
            <p>{{thumbnail.description}}</p>    
        
        </a>
    </div>
</template>

<script>


export default {
  name: 'ongoing-projects-thumbnail',
  computed: {
    ongoingProjectThumbnails() {
      let thumbnails = this.$store.state.ongoingProjects;
      return thumbnails;
    }
  }
}
</script>

<style scoped>
    .thumbnail-img {
        width: 20vw;
        height: 15vw;
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