<template>
    <div id="home-view-div" class="content">

        <div class="content-background">
            <h1>This is the Home View</h1>
        </div>
        
        <return-top-btn />
    
    </div>
</template>

<script>
import MenuComponent from '../components/MenuComponent.vue'
import ReturnTopBtn from '../components/ReturnTopBtn.vue'


export default {
  components: {MenuComponent, ReturnTopBtn},

}
</script>

<style>

#home-view-div {
    display: flex;
    flex-direction: column;
    align-items: center;
}


</style>