<template>
  <div id="account">
    <div class="container-fluid">
      <div >
        <div class="col-12" v-if="signedIn" >
          <AccountInfo />
        </div>
        <div class="row" v-else>
          <Signup />
          <Login />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Login from "@/components/Login.vue";
import Signup from "@/components/Signup.vue";
import AccountInfo from "@/components/AccountInfo.vue";

export default {
  name: "Product",
  data() {
    return {
      singedIn: false,
    };
  },
  components: {
    Login,
    Signup,
    AccountInfo,
  },
};
</script>
