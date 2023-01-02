<template>
    <div id="about-view-main-div" class="content">
        <div id="about-div" class="content-background">
            <p class="section-title">Meet the Creator</p>

            <p class="center-text">Connor Ray is a software developer with a keen eye for detail and a strong desire for creating products that not only meet but exceed customer expectations. Coming from a background as a landscape contractor for a small family buisness Connor is accustomed to taking ownership of projects and managing all aspects of each projects lifecycle / creation. If you are looking to hire a developer for your project, or add a whole new member to your team please send him an email at <a href="mailto:connor2ray@gmail.com" title="Email" class="link">connor2ray@gmail.com
            </a> for additional contact information!</p>

            <br>
            <div id="hobby-div">
                <div id="hobby-items">
                <p id="hobby-title">Some of his Hobbies Include but are not Limited to:</p>
                    <p class="list-item">● Contributing to open Source Projects</p>
                    <p class="list-item">● Camping</p>
                    <p class="list-item">● Algorithmic Trading</p>
                    <p class="list-item">● Leather Crafting</p>
                    <p class="list-item">● Bonsai</p>
                </div>
                
            </div>
            
            

            
            
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

#hobby-div {
    display: flex;
    flex-direction: column;
    justify-self: center;
    align-items: center;

}

#hobby-items {
    width: 50%;
    text-align: left;
    padding-left: 10%;
}

#hobby-title {
    font-weight: 600;
    font-size: 18px;
}

.list-item {
    margin-left: 2%;
}


</style>