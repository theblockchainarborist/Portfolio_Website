<template>
    <div id="about-view-main-div" class="content">
        <div id="about-div" class="content-background">
            <h1>This is the About View</h1>
        </div>

        <return-top-btn />
        
    </div>
</template>

<script>
import ReturnTopBtn from '../components/ReturnTopBtn.vue'
export default {
  components: { ReturnTopBtn },

}
</script>

<style>

#about-view-main-div {
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>