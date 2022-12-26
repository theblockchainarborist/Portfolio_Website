<template>
    <div id="menu-div">

        <div id="menu-home-div" class="menu-item-div"
            v-on:click="toHomePage">
            <p class="menu-font">Home</p>
        </div>

        <div id="menu-about-div" class="menu-item-div"
            v-on:click="toAboutPage">
            <p class="menu-font">About</p>
        </div>

        <div id="menu-example-sites-div" class="menu-item-div"
            v-on:click="toExamplesPage">
            <p class="menu-font">Example Sites</p>
        </div>

        <div id="menu-resume-div" class="menu-item-div"
            v-on:click="toResumePage">
            <p class="menu-font">Resume</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'menu',
    data() {
        return {

        }
    },
    methods: {
        toHomePage() {
            this.$store.commit('TOGGLE_HOME', true);
        },
        toAboutPage() {
            this.$store.commit('TOGGLE_ABOUT', true);
        },
        toExamplesPage() {
            this.$store.commit('TOGGLE_EXAMPLES', true);
        },
        toResumePage() {
            this.$store.commit('TOGGLE_RESUME', true);
        }
    }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,800;1,700&display=swap');

    #menu-div {
        display: flex;
        width: 100%;
        justify-content: space-around;
        
    }

    .menu-item-div {
        border: solid 1px white;
        box-shadow: -2.5px 5px 9px 10px rgba(5, 5, 5, 0.5);
        background-color: rgba(46, 46, 46, 0.5);
        margin-top: 5%;
        cursor: pointer;
    }

    .menu-font {
        font-family: 'Alegreya', sans-serif;
        font-size: 2rem;
        font-weight: 800;
        margin: 20px;
    }

</style>