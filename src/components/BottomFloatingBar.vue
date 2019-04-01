<template>
  <div id="bottom-floating-bar">
    <div class="bottom-nav">
      <router-link class="navbar-left-item" to="/books">books</router-link>
      <router-link class="navbar-right-item" to="/quotes">quotes</router-link>
    </div>
    <div class="add-button-container">
      <input
        id="file-input"
        type="file" 
        accept="image/*" 
        ref="fileInput"
        v-on:change="captureImage"
      >
      <img 
        class="btn-add-floater-bottom" 
        :src="require(`@/assets/appImages/${imageShortName}`)"
        v-on:click="$refs.fileInput.click()"
      ></img>

    </div>
  </div>
</template>

<script>
export default {
    name: 'BottomFloatingBar',
    data () {
    return {
        selectedFile: null,
    }
  },
  props:{
    'imageShortName': String,
  },
  methods: {
    captureImage: function(event){
      console.log('event:', event)
      this.selectedFile = event.target.files[0]
      let file = this.getFile(event.target.files)

      //Saves the file on the store
      this.$store.commit('setCapturedFileOnStore', file);

      //Redirects the application to the capture screen
      this.$router.push({
        name:'capture', 
        params:{
          file:file
        }
      });
    },
    //Takes in a file list and extracts the first one. returns the file or null if there is no file.
    getFile: function (fileList){
      let file = null;
      for (let i = 0; i < fileList.length; i++) {
        if (fileList[i].type.match(/^image\//)) {
          file = fileList[i];
          break;
        }
      }
      return file;
    }
  },
  computed:{
    background(){
      console.log('../assets/appImages/' + this.imageShortName)
      return require('../assets/appImages/' + this.imageShortName)
    }
  }
}
</script>
