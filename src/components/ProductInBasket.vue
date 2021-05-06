<template>
  <div class="">
    <div class="card p-2 my-3">
      <div class="">
        <img
        v-if="ArticlesData.product.img"
        :src="require('@/assets/img/products/' + ArticlesData.product.img)"
        class="card-img-top"
      /> 
      </div>
      <div class="text-left">
        <h5>{{ ArticlesData.product.name }}</h5>
        <p>Quantity: {{ ArticlesData.quantity }}</p>
        <p>Price: {{ priceArticle }}$</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      priceArticle: "",
    };
  },
  props: {
    ArticlesData: {
      type: Object,
      required: true,
    },
  },
  created() {
    console.log(this.ArticlesData.price);
    this.priceArticle =
      this.ArticlesData.product.price * this.ArticlesData.quantity;
  },
};
</script>
<style scoped>
img{
  max-height:100px;
  width:auto;
}
</style>
