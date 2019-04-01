<template>
  <div id="top-header">
    <div 
      class="top-nav" 
      v-bind:class="classObject"
    >
      <div 
        class="header-title"
      >{{title}}</div>

      <div 
        class="header-sub-title"
        v-if="hasSubtitle"
      >{{subTitle}}</div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'TopHeader',
  data() {
    return {
      activeClass: null,
    }
  },
  props: {
    colorScheme: String,
    title: String,
    subTitle: String,
  },
  computed: {
    classObject: function (){
      return {
        darkcolors: this.colorScheme == "dark",
        lightcolors: this.colorScheme == "light"
      }
    },
    hasSubtitle: function(){
      return this.subTitle != null
    }
  }
}
</script>
