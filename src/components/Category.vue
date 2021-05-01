<template>
    <div>
      <div class="card-body py-5"
        v-bind:style="{ 
        'background-image': 'url(' + require(`@/assets/img/categories/${category.img}`) + ')', 
        }"
      >
          <router-link :to="{
             name: 'Subcategories', 
             params: {categoryName:category.title} 
            }"      
          >
            <div class="centerMiddle categoryLink">
            {{ category.title }}
            </div>
          </router-link>
      </div>
    </div>
</template>
<script>

export default {
  props: {
    category:{
      type:Object,
      required:true
    }
  },
  routes: [
    {
      path:'/Subcategories',
      name: 'Subcategories',
      props: true,
      component:'Subcategories'
     }
  ]
}
</script>
<style scoped>

.card-body{
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 250px;
}

</style>