<template>
  <div id="subcategories" class="container-fluid">

    <div class="row">
      <div class="col-8 mx-auto">
        <nav aria-label="breadcrumb ">
          <ol class="breadcrumb text-center ">
            <router-link 
            to="/Categories" 
            class="d-inline-block breadcrumb-item">
              Categories
          </router-link>
          
          <span class="d-inline-block breadcrumb-item">{{category.title}} </span>
          </ol>
        </nav>
      </div>
    </div>
    
    <div class="row">
      <div
        v-for="subcategory in subcategories"
        :key="subcategory.id"
        class="col-3"
      >
        <div class="card mx-1 my-3">
          <Subcategory 
          v-bind:subcategoryData="subcategory"
          v-bind:categoryData="category"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import datas from "@/assets/products.json";
import Subcategory from "@/components/Subcategory.vue";

export default {
  name: "Subcategories",
  components: {
    Subcategory,
  },
  data() {
    return {
      category: {},
      subcategories: []
    };
  },
  created() {
    const categoryDisplayed = this.$route.params.categoryName;
    this.category = datas.find((d) => d.title === categoryDisplayed);
    this.subcategories = this.category.subcategories;
  }
};
</script>
