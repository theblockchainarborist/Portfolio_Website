<template>
    <div class="return-btn">
        <input id="btn-return" type="button" value="Return to Menu" v-on:click="scrollUp">
    </div>
</template>

<script>
export default {
    methods: {
    scrollUp() {
            window.scrollTo(window.innerHeight, 0);
        }
  }
}
</script>

<style>

.return-btn {
    display: flex;
    width: 60%;
    justify-content: right;
    margin-top: 1%;
}

#btn-return {
    font-size: 1.2vw;
    font-family: 'Alegreya', serif;
    font-weight: 550;
    border-radius: 5px;
}

#btn-return:hover {
    cursor: pointer;
}


/* Mobile CSS */
@media (max-width: 1400px) {
    
    #btn-return {
    font-size: 17px;
    font-family: 'Alegreya', serif;
    font-weight: 550;
    border-radius: 5px;
}
}

</style>