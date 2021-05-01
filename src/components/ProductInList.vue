<template>
  <div>
    <div class="card-img-top" alt="Cricut craft">
      <img :src="require('@/assets/img/products/'+productData.img)" class="img-fluid">
    </div> 
    <router-link :to="{
          name: 'Product', 
          params: {
            categoryName:categoryData.title,
            subCategoryName:subcategoryData.title,
            productId:productData.id
          } 
        }"
    >
      <div class="card-body py-5">
        <h5 class="card-title">{{productData.name}}</h5>

        <p class="card-title">{{productData.price}}€</p>
      </div>
    </router-link>
  </div>
</template>
<script>

export default {
  props: {
    productData:{
      type:Object,
      required:true
    },
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
      path:'/Product',
      name: 'Product',
      props: true,
      component:'Product'
     }
  ],
  created() {
    //console.log(this.categoryData);
    //console.log(this.subCategoryData);
  }

  
}
</script>
<style scoped>
.card-img-top img{
  object-fit: cover;
    height:300px;
}
</style>