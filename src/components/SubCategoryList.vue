<template>
  <div id="SubCategoryList" class="">
    <ul class="list-group list-group-flush ">
      <router-link 
      v-for="subcategory in subcategoryData"
      :key="subcategory.id"
      :to="{
        name: 'Productlist', 
        params: {
        categoryName:categoryData.title,
        subCategoryName:subcategory.title
        } 
      }"
      class="list-group-item"
      >
      {{ subcategory.title }}
      </router-link>
    </ul>
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
      type:Array,
      required:true
    }
  },
}
</script>
<style scoped>
#SubCategoryList{
  top:0;
  overflow: auto;
  max-height:60%;
}
@media screen and (max-width: 575px){
   #SubCategoryList{
      display:none;
    }
 }
</style>