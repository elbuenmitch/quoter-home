<template>
  <div id="modal-popup">
    <div class="modal-background"></div>
    <div class="modal-floating-box">
      <div class="container">
        <div class="modal-title">{{title}}</div>
        <div class="modal-message">{{message}}</div>
        <img 
          class="modal-icon" 
          :src="require(`@/assets/appImages/${imageShortName}`)"
        ></img>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ModalPopup',
    props: {
      'message': String,
      'title': String,
      'imageShortName': String,
    },
    data () {
    return {
        
    }
  },
  methods: {


  },
  computed:{

  }
}
</script>