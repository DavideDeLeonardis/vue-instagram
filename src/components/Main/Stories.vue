<template>
   <ul class="stories">
      <Storie />
      <Storie />
      <Storie />
      <Storie />
      <Storie />
      <Storie />
      <Storie />
      <Storie />
      <Storie />
      <Storie />
      <Storie />
      <Storie />
      <Storie />
   </ul>
</template>

<script>
import Storie from "./Storie";

export default {
   name: "Stories",
   components: {
      Storie,
   },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/layout/stories";
</style>
