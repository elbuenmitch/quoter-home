<template>
  <div id="capture">

    <!-- The objective of this component is to show the user the image 
    he just uploaded so that he can decide whether to retake or to continue.
    
    So there should be 'retake' (that triggers back the camera or file browser), 
    and a 'next' button (that redirects to the NewQuote page after the information from the
    Google Vision API is back gorm the server.)-->

    <router-link to="/" id="back-home-link">< back home</router-link>
    <div class="capture-message first-row">Nice! <br>
      <div class="capture-submessage">If it looks blurry or shaky, it might be a good idea to retake it.</div>
    </div>

    <!-- <canvas id="canvas-imagensita" class="hidden" height="400" width="300"></canvas> -->
    <canvas id="canvas-imagensita" class="hidden" height="1000" width="1000"></canvas>
    <img 
      class="image-preview second-row" 
      :src="imageToDisplay"
    >


    
    <two-option-bottom-bar 
      v-bind:optionLeft="{
        name: 'Retake'
      }"
      v-bind:optionRight="{
        name: 'Next',
        whereTo: '/new-quote'
      }"
    />

    <!-- Modal Loading Spinner -->
    <modal-popup 
      v-if="shouldDisplayModal"
      title="just a sec..."
      message="are you having a nice day?"
      imageShortName="spinner-solid.png"
    />


  </div>
</template>

<script>
import TwoOptionBottomBar from '../components/TwoOptionBottomBar.vue'
import ModalPopup from '../components/ModalPopup.vue'
export default {
  name: 'Capture',
  components: {
    'two-option-bottom-bar': TwoOptionBottomBar,
    'modal-popup': ModalPopup,
  },
  data () {
    return {
      selectedFile: null,
      url: null,
      imagen: null,
      naturalH: null,
      naturalW: null,
      renderWidth: null,
      renderHeight: null,
      canvasBoy: null,
      ctx: null,
    }
  },
  methods: {
    processUpload: function (image_, urlObject_, store_) {
      let width, height
      image_.onload = function() {
        width = this.width
        height = this.height
        store_.commit('setCapturedImageW', width)
        store_.commit('setCapturedImageH', height)
        //Sets the orientation
        let orientation = width > height ? "hor" : "ver"

        store_.commit('setCapturedImageOrientation', orientation)
        //Create the canvas with the image so it can be then transformed into a string
        let ctx_ = store_.getters.getCapturedImageCtx
        if (orientation == "ver"){
          console.log("ver")
          //for reference: ctx.drawImage(image, dx, dy, dWidth, dHeight)
          ctx_.drawImage(image_, 0, 0, 1000/(height/width), 1000)
        } else {
          console.log("hor")
          ctx_.drawImage(image_, 0, 0, 1000, 1000*(height/width))
          console.log('height/width:', height/width)
        }

        //Prepares the string representing the encoded image
        let c_ = store_.getters.getCapturedImageCanvas
        let encodedImageString = c_.toDataURL()
        encodedImageString = encodedImageString.slice(encodedImageString.indexOf(',')+1, encodedImageString.length)
        store_.commit('setCapturedEncodedImage', encodedImageString)

      }
      image_.src = urlObject_
    },
  },
  computed: {
    imageToDisplay: function(){
      let urlToDisplay = URL.createObjectURL(this.$route.params.file)
      this.$store.commit('setCapturedImageUlr',urlToDisplay)
      let img_ = new Image()
      this.processUpload(img_, urlToDisplay, this.$store)
      return urlToDisplay
    },
    shouldDisplayModal: function(){
      return this.$store.getters.getCapturedModalState
    }
  },
  mounted: function(){
    this.canvasBoy = document.getElementById("canvas-imagensita")
    this.$store.commit('setCapturedImageCanvas', this.canvasBoy)
    this.ctx = this.canvasBoy.getContext("2d")
    this.$store.commit('setCapturedImageCtx', this.ctx)
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">


</style>