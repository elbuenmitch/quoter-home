<template>
  <div id="two-option-bottom-bar">
    <div class="two-option-bottom-bar">
      <button class="btn-medium navbar-left-item" v-on:click="pressLeft">{{optionLeft.name}}</button>
      <button class="btn-medium navbar-right-item" v-on:click="pressRight">{{optionRight.name}}</button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'TwoOptionBottomBar',
    props: {
      'optionLeft': {
        name: String,
      },
      'optionRight': {
        name: String,
        whereTo: String
      },
    },
    data () {
    return {
        
    }
  },
  methods: {
    pressLeft: function(){
      console.log('Left pressed:')
    },
    pressRight: function(){
      console.log('Right pressed:')
      this.$store.commit('showCaptureModal')
      //sends the $router as part of the payload to push to the next page from the $store
      this.$store.dispatch('requestOCRfromGC', {
        data: this.$store.getters.getEncodedCapturedImage,
        router: this.$router
      })
      // this.$router.push('new-quote')

      // this.$router.push({
      //   name:'new-quote', 
      //   params:{
      //     text:this.$store.getters.getGCPOriginalResponseFullText
      //   }
      // });
    },

  }
}
</script>
