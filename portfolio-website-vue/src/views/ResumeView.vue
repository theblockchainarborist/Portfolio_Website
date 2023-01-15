<template>
    <div id="resume-view-main-div" class="content">
        <div id="resume-div" class="content-background">
            <resume-component />
            
        </div>
        <div id="bottom-buttons-resume">
            <download-btn />
            <return-top-btn />
        </div>
        

        
        
    </div>
</template>

<script>
import DownloadBtn from '../components/DownloadBtn.vue'
import ResumeComponent from '../components/ResumeComponent.vue'
import ReturnTopBtn from '../components/ReturnTopBtn.vue'
export default {
  components: { ResumeComponent, ReturnTopBtn, DownloadBtn },

  

}
</script>

<style>

#resume-view-main-div {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#bottom-buttons-resume {
    display: flex;
    width: 60vw;
}



</style>