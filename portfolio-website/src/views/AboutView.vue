<template>
    <div id="about-view-main-div" class="content">
        <div id="about-div" class="content-background">
            <p class="section-title">Meet the Creator</p>

            <p class="center-text-about">
                Connor Ray is a software developer with a keen eye for detail and a strong desire for creating products that not only meet but exceed customer expectations. With a background in small business ownership as a landscape contractor, Connor has experience taking ownership of projects and managing all aspects of their development. A Cleveland, Ohio native and Tech Elevator graduate, he is always looking for new opportunities to work on interesting projects and join talented teams. If you're interested in hiring Connor or adding him to your team, feel free to reach out to him at <a href="mailto:connor2ray@gmail.com" title="Email" class="link">connor2ray@gmail.com
                </a> for more information.
            </p>

            <br>
            <p class="center-text-about">
                In his free time, Connor enjoys a variety of hobbies, including contributing to open source projects, camping, algorithmic trading, leather crafting, and bonsai. These activities allow him to tap into his creativity and curiosity, and constantly challenge himself to learn new things. Whether he's working on a software project or tackling a new craft, Connor approaches everything he does with energy and dedication.
            </p>
            
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

.center-text-about {
    margin-left: 10%;
    margin-right: 10%;
}




</style>