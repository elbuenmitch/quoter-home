<template>
    <div class="section-title">
        {{title}}
        <!-- <dropdown 
            v-if="withDropdown"
        /> -->
        <p 
            v-if="simpleSubTitle"
            class="section-subtitle"
        >{{subtitle}}</p>

    </div>
</template>

<script>
import Dropdown from '../components/Dropdown.vue'
export default {
    name: 'SectionTitle',
    components: {
        'dropdown': Dropdown,
    },
    props: {
        'type': String,
        'title': String,
        'subtitle': String,
    },
    data () {
        return {
            typesOfDropdown: {
                'RetakeDelete': {
                    arrayOfOptions: [
                        {
                            name: 'retake',
                            icon: 'retake'
                        },
                        {
                            name: 'delete',
                            icon: 'delete'
                        },
                    ],
                },
                'SelectADifferentBook': {

                },
                'SearchEditDelete': {
                    arrayOfOptions: [
                        {
                            name: 'search',
                            icon: 'search'
                        },
                        {
                            name: 'edit',
                            icon: 'edit'
                        },
                        {
                            name: 'delete',
                            icon: 'delete'
                        },
                    ],

                },
            }
            
        }
    },
    computed: {
        withDropdown: function(){
            return this.type === "withDropdown"
        },
        simpleSubTitle: function(){
            return this.type === "simpleSubTitle"
        }
    }
}
</script>

<style>

</style>
