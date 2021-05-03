<template>
    <div>
      <div class="card-body py-5"
      v-bind:style="{ 
        'background-image': image , 
        }"
      >
          <router-link v-if="subcategoryData" :to="{
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

          <router-link v-else :to="{
             name: 'Subcategories', 
             params: {categoryName:categoryData.title} 
            }"      
          >
            <div class="centerMiddle categoryLink">
            {{ categoryData.title }}
            </div>
          </router-link>

      </div>
    </div>
</template>
<script>

export default {
  data(){
    return{
          image:''
    }
  },
  props: {
    categoryData:{
      type:Object,
      required:true
    },
    subcategoryData:{
      type:Object,
      required:false
    }
  },
  routes: [
    {
      path:'/Subcategories',
      name: 'Subcategories',
      props: true,
      component:'Subcategories'
    },
    {
      path:'/Productlist',
      name: 'ProductList',
      props: true,
      component:'ProductList'
     }
  ],
  created(){
    this.setImage();
  },
  methods:{
    setImage(){
      if(this.subcategoryData==null){
        this.image= 'url(' + require(`@/assets/img/categories/${this.categoryData.img}`) + ')'

      }else{
        this.image= 'url(' + require(`@/assets/img/subcategories/${this.subcategoryData.img}`) + ')'
      } 
    }
  }

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