<template>
  <div id="product" class="container-fluid">
    <div class="row">
      <div class="col-8 mx-auto">
        <nav aria-label="breadcrumb ">
          <ol class="breadcrumb text-center">
            <router-link to="/Categories" class="d-inline-block breadcrumb-item"
              >Categories
            </router-link>
            <router-link
              :to="{
                name: 'Subcategories',
                params: { categoryID: category.ID },
              }"
              class="d-inline-block breadcrumb-item"
              >{{ category.name }}
            </router-link>
            <router-link
              :to="{
                name: 'Productlist',
                params: { categoryID: category.ID },
                params: { subcategoryID: subCategory.ID },
              }"
              class="d-inline-block breadcrumb-item"
              >{{ subCategory.name }}
            </router-link>
            <span class="d-inline-block breadcrumb-item"
              >{{ product.name }}
            </span>
          </ol>
        </nav>
      </div>
    </div>
    <div v-if="dataReady" class="row pt-5">
      <div class="col-6">
        <img
          v-if="product.img"
          :src="require('@/assets/img/products/' + product.img)"
          class="img-fluid"
        />
      </div>
      <div class="col-6 text-left">
        <h3 class="pb-3 font-weight-bold">{{ product.name }}</h3>
        <table class="table">
          <tbody>
            <tr>
              <th scope="row">Price</th>
              <td>{{ product.price }}€</td>
            </tr>
            <tr>
              <th scope="row">Description</th>
              <td>{{ product.description }}</td>
            </tr>
            <tr>
              <th scope="row">Country of origin</th>
              <td>{{ product.country_origin }}</td>
            </tr>
            <tr>
              <th scope="row">Dimensions</th>
              <td>{{ product.size }}cm</td>
            </tr>
            <tr>
              <th scope="row">Materials</th>
              <td>
                {{ product.materiels }}
                <!-- <span v-for="materials in product.materials"
                :key="materials">
                  {{materials}} 
                </span> -->
              </td>
            </tr>
            <tr>
              <th scope="row">Personnalisable product</th>
              <td v-if="product.personnalisable">Yes</td>
              <td v-else>No</td>
            </tr>
            <tr>
              <th scope="row" class="text-success" v-if="product.quantity > 0">
                This product is in stock
              </th>
              <th scope="row" class="text-danger" v-else>
                Sorry, this product is out of stock
              </th>
            </tr>
          </tbody>
        </table>
        <div class="row text-center pt-5">
          <div class="col-5 py-2 text-right">
            <button
              v-if="counter <= 0"
              id="QuantityMinus"
              disabled
              class="btn display-inline-block"
            >
              -
            </button>
            <button
              v-else
              id="QuantityMinus"
              v-on:click="counter -= 1"
              class="btn display-inline-block"
            >
              -
            </button>
            <span class="mx-2 display-inline-block font-weight-bold counter">{{
              counter
            }}</span>
            <button
              id="QuantityAdd"
              v-on:click="counter += 1"
              class="btn display-inline-block"
            >
              +
            </button>
          </div>
          <div class="col-7 text-left">
            <button
              v-if="counter <= 0 || product.quantity <= 0 || product.quantity == null"
              class="btn"
              disabled
            >
              Add to basket
            </button>
            <router-link v-else to="/basket">
            <button  class="btn" v-on:click="addToCart">
              Add to basket
            </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import datas from '@/assets/products.json'

import CategorieService from "@/services/Categorie.service.js";
import SubcategorieService from "@/services/Subcategorie.service.js";
import ProductService from "@/services/Product.service.js";

export default {
  name: "Product",
  data() {
    return {
      category: {},
      subcategories: [],
      subCategory: {},
      products: [],
      product: {},
      counter: 1,
      disabled: true,
      dataReady: false,
    };
  },
  created() {
    //this.initComponent();
    console.log("Product");
    console.log(this.product);
  },
  methods: {
    addToCart() {
      const article =
        '{ "product": ' +
        JSON.stringify(this.product) +
        ',"quantity" : ' +
        this.counter +
        " }";

      console.log(article);
      if (window.localStorage.getItem("products") != null) {
        let alreadyInBasket = window.localStorage.getItem("products");
        alreadyInBasket = alreadyInBasket.substring(
          1,
          alreadyInBasket.length - 1
        );
        let articles = "[" + alreadyInBasket + " , " + article + "]";
        window.localStorage.setItem("products", articles);
      } else {
        window.localStorage.setItem("products", "[ " + article + " ]");
      }

      // window.localStorage.setItem('product'+this.product.ID, article);
      // window.localStorage.setItem('product'+this.product.ID+"quantity", articleQuantity);
      // window.localStorage.setItem('product'+this.product.ID, article);
      // window.localStorage.setItem('product'+this.product.ID+"quantity", articleQuantity);
    },
    initComponent() {
      /*const categoryDisplayed = this.$route.params.categoryName;
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
      console.log(this.product);*/
      //console.log(this.product.img)
      const categoryID = this.$route.params.categoryID;
      const subcategoryID = this.$route.params.subcategoryID;
      const productID = this.$route.params.productID;

      CategorieService.getById(categoryID)
        .then((res) => {
          if (res) {
            this.category = res[0];
            //console.log(this.category);
          }
        })
        .catch((err) => console.log(err));

      SubcategorieService.getByIdNoCategory(subcategoryID)
        .then((res) => {
          if (res) {
            this.subCategory = res[0];
            //console.log(this.subCategory);
          }
        })
        .catch((err) => console.log(err));

      ProductService.getById(productID)
        .then((res) => {
          if (res) {
            console.log(res);
            this.product = res[0];
          }
        })
        .catch((err) => console.log(err));

      this.dataReady = true;
    },
  },
  watch: {
    "$route.path": function () {
      this.initComponent();
    },
  },
  async mounted() {
    this.initComponent();
  },
};
</script>
<style scoped>
img {
  object-fit: cover;
  height: 75%;
}
.counter {
  font-size: 20px;
}
</style>
