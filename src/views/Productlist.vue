<template>
  <div id="productList" class="container-fluid">
    <div class="row">
      <div v-if="dataReady" class="col-8 mx-auto">
        <nav aria-label="breadcrumb ">
          <ol class="breadcrumb text-center">
            <router-link to="/Categories" class="d-inline-block breadcrumb-item"
              >Categories
            </router-link>
            <router-link
              :to="{
                name: 'Subcategories',
                params: { categoryID: categoryId },
              }"
              class="d-inline-block breadcrumb-item"
              >{{ category.name }}
            </router-link>
            <span class="d-inline-block breadcrumb-item"
              >{{ subCategory.name }}
            </span>
          </ol>
        </nav>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-3 col-md-4 col-sm-6"></div>
      <div
        class="col-lg-3 col-md-4 col-sm-6 h-100 position-fixed subCategoryList"
      >
        <SubCategoryList v-bind:subCategoriesData="subcategories" />
      </div>
      <div class="col-lg-9 col-md-8 col-sm-6 col-xs-6">
        <div class="row">
          <div
            v-for="product in products"
            :key="product.ID"
            class="col-lg-3 col-md-6 col-sm-12"
          >
            <div class="card mx-1 my-3">
              <ProductInList
                v-bind:productData="product"
                v-bind:subcategoryData="subCategory"
                v-bind:categoryName="product.categoryName"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//import datas from "@/assets/products.json";

import ProductInList from "@/components/ProductInList.vue";
import SubCategoryList from "@/components/SubCategoryList.vue";

import CategorieService from "@/services/Categorie.service.js";
import SubcategorieService from "@/services/Subcategorie.service.js";
import ProductService from "@/services/Product.service.js";

export default {
  name: "Productlist",
  components: {
    ProductInList,
    SubCategoryList,
  },
  data() {
    return {
      categoryID: "",
      category: {},
      subcategories: [],
      subCategory: {},
      products: [],
      dataReady: false,
      //subCategoryId:""
    };
  },
  created() {
    this.categoryId = this.$route.params.categoryID;
    //console.log( this.subCategoryId );
    //console.log( this.categoryID );
  },
  methods: {
    initComponent() {
      /*const categoryDisplayed = this.$route.params.categoryName;
      const subCategoryDisplayed = this.$route.params.subCategoryName;

      this.category = datas.find((d) => d.title === categoryDisplayed);
      this.subCategories = this.category.subcategories;

      this.subCategory = this.subCategories.find((d) => d.title === subCategoryDisplayed);

      this.products = this.subCategory.products;*/

      const subcategoryID = this.$route.params.subcategoryID;
      const categoryID = this.$route.params.categoryID;

      CategorieService.getById(categoryID)
        .then((res) => {
          if (res) {
            this.category = res[0];
            console.log(this.category);
          }
        })
        .catch((err) => console.log(err));

      SubcategorieService.getByIdNoCategory(subcategoryID)
        .then((res) => {
          if (res) {
            this.subCategory = res[0];
            console.log(this.subCategory);
          }
        })
        .catch((err) => console.log(err));

      ProductService.getAll(subcategoryID)
        .then((res) => {
          if (res) {
            console.log(res);
            this.products = res;
            this.categoryID = this.products[0].categoryID;
          }
        })
        .catch((err) => console.log(err));

      SubcategorieService.getAll(categoryID)
        .then((res) => {
          if (res) {
            this.subcategories = res;
            console.log("SUBCATEGORIES");
            console.log(this.subcategories);
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
#productList .card {
  box-shadow: none;
}
</style>
