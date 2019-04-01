<template>
  <div class="quotes">
    <div>Quotes</div>
    <top-header colorScheme="dark" title="quotes"/>
    <bottom-floating-bar 
      imageShortName="newQuoteIcon.png"
    />
  </div>
</template>

<script>
import BottomFloatingBar from '../components/BottomFloatingBar.vue'
import TopHeader from '../components/TopHeader.vue'
export default {
  name: 'quotes',
  components: {
    "bottom-floating-bar": BottomFloatingBar,
    "top-header": TopHeader,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>