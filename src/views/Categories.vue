<template>
    <div id="categories" class="container-fluid">
        <div class="row">
            <div 
            v-for="data in datas"
            :key="data.id" 
            class="col-3">
                <div class="card mx-1 my-3">
                    <Category v-bind:category="data"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import datas from '@/assets/products.json'
import Category from '@/components/Category.vue'

export default {
  name: 'Categories',
  components: {
    Category
  },
  data() {
        return {
            datas:datas
        }
    },
}


</script>
