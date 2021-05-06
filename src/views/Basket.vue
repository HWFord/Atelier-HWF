<template>
  <div id="basket">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>Your basket</h1>
        </div>
      </div>
      <div>
        <div class="articles row">
          <div
            class="col-2 d-inline-block"
            v-for="article in articles"
            :key="article.product.ID"
          >
            <ProductInBasket v-bind:ArticlesData="article" />
          </div>
        </div>
        
      </div>
        <div class="total row justify-content-end mt-5">
          <div class="">
            <h5 class="d-inline-block font-weight-bold mr-3 my-2">Total à payer {{ total }}$</h5>
            <button type="submit" class="btn btn-primary d-inline-block">Payer</button>
          </div>
        </div>
    </div>

  </div>
</template>
<script>
import ProductInBasket from "@/components/ProductInBasket.vue";
export default {
  name: "Basket",
  components: {
    ProductInBasket,
  },
  data() {
    return {
      articles: [],
      total:0
    };
  },
  created() {
    this.getProductsInBasket();
    console.log(this.articles);
    for(let i = 0; i<this.articles.length; i++){
      let articleQuantity= this.articles[i].quantity;
      let articlePrice= this.articles[i].product.price;
      this.total=this.total +(articleQuantity*articlePrice);
    }

  },
  methods: {
    getProductsInBasket() {
      this.articles = JSON.parse(window.localStorage.getItem("products"));
    },
  },
};
</script>
<style scoped>
.articles{
  max-height:400px;
  overflow-y:auto;
}
</style>
