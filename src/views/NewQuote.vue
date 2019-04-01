<template>
  <div id="new-quote">
    <top-header 
      colorScheme="light" 
      title="ADD NEW QUOTE"
      subTitle="[Placeholder for the currently reading book]"
    />
    
    <div class="white-space"></div>
    <!-- <section-title 
      title="Favorite?"
    /> -->

    <!-- Original Image Section -->
    <section-title 
      title="Original Image"
      type="withDropdown"
    />
    <div class="title">[DROPDOWN]</div> 
    <img 
      class="image-preview" 
      :src="originalImageToDisplay"
    >
    <hr class="section-divider-line">

    <!-- Extracted Text Section -->
    <section-title 
      title="Extracted Text"
      type="simpleSubTitle"
      subtitle="Edit the text below and hit SAVE"
    />
    <textarea name="" id="" class="text-area">{{ extractedText }}</textarea>
    <hr class="section-divider-line">

    <!-- Book Information Section -->
    <section-title 
      title="Book Info"
      type="simpleSubTitle"
      subtitle="Tap on the book to visit its detail page"
    />
    <div class="title">[BOOK PREVIEW CARD]</div> 
    <div class="title">[PICK A DIFFERENT BOOK button]</div> 
    <hr class="section-divider-line">

    <!-- Tags Section -->
    <section-title 
      title="Tags"
      type="simpleSubTitle"
      subtitle="Tap on any tag to open available options"
    />
    <div class="title">[TAGS container]</div> 
    <div class="title">[ADD NEW TAG]</div> 
    <hr class="section-divider-line">

    <!-- Suggested Tags Section -->
    <section-title 
      title="Suggested Tags"
      type="simpleSubTitle"
      subtitle="Tap on any suggestion to add"
    />
    <div class="title">[SUGGESTIONS container]</div> 
    <hr class="section-divider-line">

    <!-- Quote Metadata Section -->
    <section-title 
      title="Quote Metadata"
      type="simpleSubTitle"
      subtitle="Tap an item to edit"
    />
    <div class="title">Chapter</div>
    <div class="title">2</div>
    <div class="title">Page</div>
    <div class="title">138</div>

    <hr class="section-divider-line">

    <!-- Notes Section -->
    <section-title 
      title="Notes"
      type="simpleSubTitle"
      subtitle="Your thoughts on this quote..."
    />
    <textarea name="" id="" class="text-area text-area-notes"></textarea>



    <div class="white-space"></div>
    <two-option-bottom-bar 
      v-bind:optionLeft="{
        name: 'Cancel',
        whereTo: '/quotes'
      }"
      v-bind:optionRight="{
        name: 'Save',
        whereTo: '/new-quote'
      }"
    />


  </div>
</template>

<script>
import TwoOptionBottomBar from '../components/TwoOptionBottomBar.vue'
import TopHeader from '../components/TopHeader.vue'
import SectionTitle from '../components/SectionTitle.vue'
export default {
  name: 'NewQuote',
  components: {
    'two-option-bottom-bar': TwoOptionBottomBar,
    "top-header": TopHeader,
    "section-title": SectionTitle,
  },
  data () {
    return {
      extractedText: null,
    }
  },
  methods: {

  },
  computed:{
    originalImageToDisplay: function (){
      console.log('this.$store.getters.getImageUrl:', this.$store.getters.getImageUrl)
      return this.$store.getters.getImageUrl
    },
  },
  created: function (){
    let ex = this.$store.getters.getGCPOriginalResponseFullText
    this.extractedText = ex.replace(/[\r\n]/g, " ")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
