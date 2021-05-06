<template>
  <div id="SubCategoryList" class="">
    <ul class="list-group list-group-flush">
      <li v-for="subcategory in subCategoriesData" :key="subcategory.ID">
        <router-link
          class="list-group-item"
          :to="{
            name: 'Productlist',
            params: { categoryID: subcategory.ID_1 },
            params: { subcategoryID: subcategory.ID },
          }"
        >
          {{ subcategory.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    subCategoriesData: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    console.log(this.subCategoriesData);
  },
};
</script>
<style scoped>
#SubCategoryList {
  top: 0;
  overflow: auto;
  max-height: 60%;
}
.list-group-item {
  border: 0px;
}
@media screen and (max-width: 575px) {
  #SubCategoryList {
    display: none;
  }
}
</style>