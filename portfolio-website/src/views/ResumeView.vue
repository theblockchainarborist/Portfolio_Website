<template>
    <div id="resume-view-main-div" class="content">
        <div id="resume-div" class="content-background">
            <resume-component />
        </div>

        <return-top-btn />
        
    </div>
</template>

<script>
import ResumeComponent from '../components/ResumeComponent.vue'
import ReturnTopBtn from '../components/ReturnTopBtn.vue'
export default {
  components: { ResumeComponent, ReturnTopBtn },

  

}
</script>

<style>

#resume-view-main-div {
    display: flex;
    flex-direction: column;
    align-items: center;
}



</style>