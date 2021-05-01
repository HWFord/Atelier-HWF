<template>
    <div>
      <div class="card-body py-5"
      v-bind:style="{ 
        'background-image': 'url(' + require(`@/assets/img/subcategories/${subcategoryData.img}`) + ')', 
        }"
      >
          <router-link :to="{
             name: 'Productlist', 
             params: {
               categoryName:categoryData.title,
               subCategoryName:subcategoryData.title
               } 
            }"
          >
            <div class="centerMiddle categoryLink">
            {{ subcategoryData.title }}
            </div>
          </router-link>
      </div>
    </div>
</template>
<script>

export default {
  props: {
    categoryData:{
      type:Object,
      required:true
    },
    subcategoryData:{
      type:Object,
      required:true
    }
  },
  routes: [
    {
      path:'/Productlist',
      name: 'ProductList',
      props: true,
      component:'ProductList'
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