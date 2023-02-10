<template>
    <div id="examples-view-main-div" class="content">
        <div id="examples-div" class="content-background">
            <p id="example-websites-title" class="section-title">Example Websites</p>
            <br>
            <p class="no-margin">Please click any of the below thumbnails to view full page image.</p>

            <br>
            
            <div>
                <completed-projects-thumbnail />
            </div>
        </div>

        <return-top-btn />

        <div>
            <full-screen-image />
        </div>
        
    </div>
</template>

<script>
import ReturnTopBtn from '../components/ReturnTopBtn.vue'
import CompletedProjectsThumbnail from '../components/CompletedProjectsThumbnail.vue'
import FullScreenImage from '../components/FullScreenImage.vue'
export default {
  components: { ReturnTopBtn, CompletedProjectsThumbnail, FullScreenImage },

}
</script>

<style>

#examples-view-main-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    

}



</style>