<template>
    <div id="examples-view-main-div" class="content">
        <div id="examples-div" class="content-background">
            <h1>This is the Examples View</h1>
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

#examples-view-main-div {
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>