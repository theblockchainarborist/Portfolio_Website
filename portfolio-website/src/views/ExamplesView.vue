<template>
    <div id="examples-view-main-div" class="content">
        <div id="examples-div" class="content-background">
            <p id="example-websites-title" class="section-title">Example Websites</p>
            <br>
            <p>Please click any of the below thumbnail's to view the project on CodeSandBox.io.</p>

            <br>
            
            <div>
                <completed-projects-thumbnail />
            </div>
        </div>

        <return-top-btn />
        
    </div>
</template>

<script>
import ReturnTopBtn from '../components/ReturnTopBtn.vue'
import CompletedProjectsThumbnail from '../components/CompletedProjectsThumbnail.vue'
export default {
  components: { ReturnTopBtn, CompletedProjectsThumbnail },

}
</script>

<style>

#examples-view-main-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    

}



</style>