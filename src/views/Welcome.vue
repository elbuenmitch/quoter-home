<template>
  <div class="welcome">
    <top-header colorScheme="dark" title="quoter"/>
    <bottom-floating-bar />
  </div>
</template>

<script>
import BottomFloatingBar from '../components/BottomFloatingBar.vue'
import TopHeader from '../components/TopHeader.vue'
export default {
  name: 'welcome',
  components: {
    "bottom-floating-bar": BottomFloatingBar,
    "top-header": TopHeader,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>