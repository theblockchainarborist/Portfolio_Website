<template>
    <div>
      <div v-if="showFullScreenImage" class="modal-overlay">
        <div class="modal-content">
            <div class="close-btn-div">
                <p class="close-text">Click to close</p>
                <button class="close-btn" @click="closeModal"> X </button>
            </div>
          <img :src="imgSrc" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
import store from '../store/index';

  export default {
    name: "full-screen-image",
    data() {
      return {
        imgSrc: ""
      };
    },
    methods: {
        closeModal() {
            console.log("BUTTON CLICKED")
            store.commit("SET_FULL_SCREEN_IMAGE", false)
        }
    },
    computed: {
        showFullScreenImage() {
            return store.state.FullScreenImage;
        },
        getImage() {
            return store.state.currentImagePath;
        }
    },
    watch: {
        getImage(newValue, oldValue) {
            if (newValue !== oldValue) {
                this.imgSrc = newValue;
            }
        }
    }
  };
  </script>
  
  <style>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
  
  .modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    text-align: center;
    width: 90%;
    height: 95vh;
  }
  
  img {
    width: 100%;
    height: auto;
    max-width: 100vw;
    max-height: 90vh;
  }

  .close-btn-div {
    display: flex;
    justify-content: right;
  }

  .close-btn {
    font-size: 30px;
    border: solid 1px black;
    width: 35px;
    height: 35px;
    display: flex;
    align-self: center;
    background-color: rgba(241, 30, 30, 0.733);
    margin-bottom: 3px;
  }

  .close-btn:hover {
    background-color: red;
    cursor: pointer;
  }

  .close-text {
    margin-right: 5px;
  }
  </style>