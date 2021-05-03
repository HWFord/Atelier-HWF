<template>
    <div id="categories" class="container-fluid">
        <div class="row">
            <div 
            v-for="data in datas"
            :key="data.id" 
            class="col-3">
                <div class="card mx-1 my-3">
                    <Subcategory v-bind:categoryData="data"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import datas from '@/assets/products.json'
import Subcategory from '@/components/Subcategory.vue'

export default {
  name: 'Categories',
  components: {
    Subcategory
  },
  data() {
        return {
            datas:datas
        }
    },
}


</script>
