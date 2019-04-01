<template>
    <div id="dropdown">
        <div class='' @click="toggleMenu()">
            <i class="material-icons grey-text dropdown-arrow">arrow_drop_down</i>
        </div>
        <transition name="slide">
            <ul v-if="show" class="options-list">
                <transition-group appear name="list">
                    <li v-for="(option, index) in options" :key="index" >
                        <a key="index" href="javascript:void(0)" @click="updateOptionn(option)" class="option-item">
                            <i class="material-icons grey-text option-item-icon">{{option.icon}}</i>
                            {{ option.name }}
                        </a>
                    </li>
                </transition-group>
            </ul>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'dropdown',
    props: {
        options: {
                type: [Array, Object]
            },
        placeholder: [String]
    },
    data(){
        return{
            show: false,
            selectedOption: {
                name: ''
            },
        }
    },
    methods: {
        toggleMenu: function(){
            this.show = !this.show;
        },
        deleteRecord: function(){
            console.log('hola from delete'+this.entryId_);
        },
        updateOptionn(option) {
            this.selectedOption = option;
            this.showMenu = false;
            this.$emit('updateOption', this.selectedOption);
            this.toggleMenu();
        },
    }
}
</script>

<style scoped>

.options-list{
    position: absolute;
    background-color: #f6f6f6;
    border-top: 1px solid #dfdfdf;
    padding: 0;
    z-index: 1;
    left: -8rem;
    top: 1.8rem;
    -webkit-box-shadow: 0 0 16px -5px #8c8c8c;
    box-shadow: 0 0 16px -5px #8c8c8c;
}
.option-item{
    font-size: 1.2rem;
    margin: 0.7rem 0;
    padding: 0 2rem;
    display: flex;
    justify-content: center;
}
.option-item:hover{
    color: black;
}
.dropdown-arrow{
    cursor: pointer;
}
.option-item-icon{
    margin-right: 1rem;
}
.slide-enter-active, .slide-leave-active {
  transition: opacity .5s;
}
.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 0.5s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(-20px);
}
</style>


