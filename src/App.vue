<template>
   <div id="app">
      <Nav />
      <Main />
   </div>
</template>

<script>
import Nav from "@/components/Nav";
import Main from "@/components/Main";

export default {
   name: "App",
   components: {
      Nav,
      Main
   },
};
</script>

<style lang="scss">
@import "@/assets/scss/index.scss";
</style>
