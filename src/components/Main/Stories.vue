<template>
   <ul class="stories">
      <Storie
         v-for="(storie, index) in profiles"
         :key="`storie-${index}`"
         :storie="storie"
      />
   </ul>
</template>

<script>
import Storie from "./Storie";

export default {
   name: "Stories",
   components: {
      Storie,
   },
   props: {
      profiles: {
         type: Array,
         default() {
            return [];
         },
      },
   },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/layout/stories";
</style>
