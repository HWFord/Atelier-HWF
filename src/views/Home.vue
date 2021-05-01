<template>
  <div class="home">
    <div class="container-fluid middle">
      <div class="col-12">
        <img class="w-25" alt="atelier Hwf logo" src="../assets/logo.png">
      </div>
      <div class="col-12 mt-3">
        <router-link to="/categories">
          <button type="button" class="btn btn-light enter">Enter</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {

  }
}
</script>
<style scoped>
  .middle{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (max-height: 500px){
    .middle{
      position: unset;
      top:unset;
      transform:unset;

    }
  }
</style>