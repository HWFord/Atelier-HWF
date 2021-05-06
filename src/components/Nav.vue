<template>
  <div id="nav" class="position-fixed">
    <nav class="row my-3">
      <div class="py-2">
        <div id="nav-brand">
          <router-link to="/home">
            <img
              class="brand"
              alt="atelier Hwf logo"
              src="../assets/logo.png"
            />
          </router-link>
        </div>
      </div>
      <div class="col-12 d-inline-block px-0 py-3">
        <router-link to="/Categories">Home</router-link>
        |
        <router-link to="/about">About</router-link>
      </div>
      <div class="account py-3">
        <router-link to="/account"
          ><img class="icon" alt="cart icon" src="../assets/user.svg"
        /></router-link>
      </div>
      <div class="basket py-3">
        <router-link to="/basket"
          ><img class="icon" alt="cart icon" src="../assets/cart.svg"
        /></router-link>
      </div>
    </nav>
  </div>
</template>

<style scoped>
#nav {
  font-size: 1.5rem;
  width: 100%;
  top: 0;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 1;
}

#nav #nav-brand {
  position: absolute;
  margin-left: 40px;
  z-index: 99;
}
#nav .account {
  position: absolute;
  margin-right: 80px;
  right: 0;
}
#nav .basket {
  position: absolute;
  margin-right: 40px;
  right: 0;
}
</style>