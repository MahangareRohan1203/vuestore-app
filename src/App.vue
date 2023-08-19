<template>
  <div id="container">
    <!-- <HomeVue/> -->
    <router-view></router-view>
  </div>
</template>

<script setup>
  import HomeVue from './components/views/Home.vue';
</script>

<style scoped>
  #container{
    padding-left: 2%;
    padding-right: 2%;
  }
</style>