<template>
   <div id="app">
      <Nav />
      <div class="container main-container">
         <Main />
         <Aside />
      </div>
   </div>
</template>

<script>
import Nav from "@/components/Nav";
import Main from "@/components/Main/Main";
import Aside from "@/components/Aside/Aside";

export default {
   name: "App",
   components: {
      Nav,
      Main,
      Aside,
   },
};
</script>

<style lang="scss">
@import "@/assets/scss/index.scss";
</style>
