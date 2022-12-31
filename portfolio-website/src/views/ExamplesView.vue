<template>
    <div id="examples-view-main-div" class="content">
        <div id="examples-div" class="content-background">
            <p id="example-websites-title" class="title bold">Example Websites</p>
            <br>
            <p>Please click any of the below thumbnail's to view the project on CodeSandBox.io.</p>

            <br>
            
            <div>
                <sand-box-thumb-nail />
            </div>
        </div>

        <return-top-btn />
        
    </div>
</template>

<script>
import ReturnTopBtn from '../components/ReturnTopBtn.vue'
import SandBoxThumbNail from '../components/SandBoxThumbNail.vue'
export default {
  components: { ReturnTopBtn, SandBoxThumbNail },

}
</script>

<style>

#examples-view-main-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    

}



</style>