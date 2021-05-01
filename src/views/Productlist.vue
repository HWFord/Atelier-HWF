<template>
  <div id="productList" class="container-fluid">
    <div class="row">
      <div class="col-8 mx-auto">
        <nav aria-label="breadcrumb ">
          <ol class="breadcrumb text-center ">
            <router-link 
            to="/Categories" 
            class="d-inline-block breadcrumb-item"
            >Categories
          </router-link>
          
          <router-link 
            :to="{
              name: 'Subcategories', 
              params: {categoryName:category.title} 
            }" 
            class="d-inline-block breadcrumb-item"    
          >{{category.title}}
          </router-link>
          <span class="d-inline-block breadcrumb-item">{{subCategory.title}} </span>
          </ol>
        </nav>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-3 col-md-4 col-sm-6"></div>
      <div class="col-lg-3 col-md-4 col-sm-6 h-100 position-fixed subCategoryList">
        <SubCategoryList
          v-bind:subcategoryData="subCategories"
          v-bind:categoryData="category"
        />
      </div>
      <div class="col-lg-9 col-md-8 col-sm-6 col-xs-6">
        <div class="row">
          <div
            v-for="product in products"
            :key="product.id"
            class="col-lg-3 col-md-6 col-sm-12"
          >
            <div class="card mx-1 my-3">
              
                <ProductInList
                  v-bind:productData="product"
                  v-bind:subcategoryData="subCategory"
                  v-bind:categoryData="category"
                />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>

import datas from "@/assets/products.json";

import ProductInList from "@/components/ProductInList.vue";
import SubCategoryList from "@/components/SubCategoryList.vue";

export default {
  name: "Productlist",
  components: {
    ProductInList,
    SubCategoryList
  },
  data() {
    return {
      category: {},
      subCategories: [],
      subCategory: {},
      products:[]
    };
  },
  created() {
    this.initComponent();
  },
  methods:{
    initComponent(){
      const categoryDisplayed = this.$route.params.categoryName;
      const subCategoryDisplayed = this.$route.params.subCategoryName;
      //console.log(categoryDisplayed);
      //console.log(subCategoryDisplayed);

      this.category = datas.find((d) => d.title === categoryDisplayed);
      this.subCategories = this.category.subcategories;
      //console.log(this.subCategories);
      this.subCategory = this.subCategories.find((d) => d.title === subCategoryDisplayed);
      //console.log(this.subCategory);
      //console.log(this.subCategory.products);
      this.products = this.subCategory.products;
      //console.log(this.products);
      //console.log(this.subCategory);
    }
  },
  watch:{
    '$route.path': function(){
      this.initComponent();
    }
  }

}

</script>

<style scoped>
#productList .card{
  box-shadow:none;
}
</style>
