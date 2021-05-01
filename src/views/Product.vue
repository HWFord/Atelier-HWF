<template>
  <div id="product" class="container-fluid">
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
          <router-link 
            :to="{
              name: 'Productlist', 
              params: {categoryName:category.title},
              params: {subcategoryName:subCategory.title} 
            }" 
            class="d-inline-block breadcrumb-item"    
          >{{subCategory.title}}
          </router-link>
          <span class="d-inline-block breadcrumb-item">{{product.name}} </span>
          </ol>
        </nav>
      </div>
    </div>
    <div class="row pt-5">
      <div class="col-6">
         <img :src="require('@/assets/img/products/'+product.img)" class="img-fluid">
      </div>
      <div class="col-6 text-left">
        <h3 class="pb-3 font-weight-bold">{{product.name}}</h3>
        <table class="table">
          <tbody>
            <tr>
              <th scope="row">Price</th>
              <td>{{product.price}}€</td>
            </tr>
            <tr>
              <th scope="row">Description</th>
              <td>{{product.description}}</td>
            </tr>
            <tr>
              <th scope="row">Country of origin</th>
              <td>{{product.countryOfOrigin}}</td>
            </tr>
            <tr>
              <th scope="row">Dimensions</th>
              <td>{{product.dimensions[0].height}}cm height x {{product.dimensions[0].width}}cm width x {{product.dimensions[0].depth}}cm depth</td>
            </tr>
            <tr>
              <th scope="row">Materials</th>
              <td >
                <span v-for="materials in product.materials"
                :key="materials">
                  {{materials}} 
                </span>
              </td>
            </tr>
            <tr>
              <th scope="row">Personnalisable product</th>
              <td v-if=product.personnalisable>Yes</td>
              <td v-else>No</td>
            </tr>
            <tr>
              <th scope="row" class="text-success" v-if="product.quantity>0">This product is in stock</th>
              <th scope="row" class="text-danger" v-else>Sorry, this product is out of stock</th>
            </tr>
          </tbody>
        </table>
        <div class="row text-center pt-5">
          <div class="col-5 py-2 text-right">
            
            <button v-if="counter <=0" id="QuantityMinus"  disabled class="btn display-inline-block">-</button>
            <button v-else  id="QuantityMinus" v-on:click="counter -= 1" class="btn display-inline-block">-</button>
            <span class="mx-2 display-inline-block font-weight-bold counter">{{ counter }}</span>
            <button id="QuantityAdd" v-on:click="counter += 1" class="btn display-inline-block">+</button>
            
          </div>
          <div class="col-7 text-left">
            <button v-if="counter <=0" class="btn" disabled>Add to basket</button>
            <button v-else class="btn">Add to basket</button>
          </div>
      </div>
      </div>
    </div>
    
  </div>
  
</template>

<script>

import datas from '@/assets/products.json'

export default {
  name: 'Product',
  data() {
        return {
            category:{},
            subcategories: [],
            subCategory: {},
            products: [],
            product:{},
            counter: 1,
            disabled:true
        }    
  },
  created(){
      this.initComponent();
      
  },
  methods:{
    initComponent(){
      const categoryDisplayed = this.$route.params.categoryName;
      const subCategoryDisplayed = this.$route.params.subCategoryName;
      const productDisplayed = this.$route.params.productId;

      console.log(categoryDisplayed);
      console.log(subCategoryDisplayed);
      console.log(productDisplayed);

      this.category = datas.find((d) => d.title === categoryDisplayed);
      console.log(this.category);

      this.subcategories = this.category.subcategories;
      console.log(this.subcategories);

      this.subCategory= this.subcategories.find((d) => d.title === subCategoryDisplayed);
      console.log(this.subCategory);

      this.products = this.subCategory.products;
      console.log(this.products);

      this.product = this.products.find((d) => d.id === productDisplayed);
      console.log(this.product);

    }
  },
  watch:{
    '$route.path': function(){
      this.initComponent();
    }
  },
  computed:{

  }

}

</script>
<style scoped>
img{
  object-fit: cover;
  height:75%;
}
.counter {
  font-size:20px;
}

</style>
