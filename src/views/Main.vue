<template>
  <div class="main">
    <Nav/>
      <div class="content">
        <router-view/>
      </div>
  </div>
</template>

<script>

import Nav from '@/components/Nav.vue'

export default {
  name: 'Home',
  components: {
    Nav
  }
}
</script>
<style scoped>
.content{
  margin-top:115px;
}
</style>
