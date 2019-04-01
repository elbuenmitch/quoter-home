<template>
  <div class="books">
    <div>Books</div>
    <top-header colorScheme="dark" title="books"/>
    <bottom-floating-bar 
      imageShortName="newBookIcon.png"
    />
  </div>
</template>

<script>
import BottomFloatingBar from '../components/BottomFloatingBar.vue'
import TopHeader from '../components/TopHeader.vue'
export default {
  name: 'books',
  components: {
    "bottom-floating-bar": BottomFloatingBar,
    "top-header": TopHeader,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>