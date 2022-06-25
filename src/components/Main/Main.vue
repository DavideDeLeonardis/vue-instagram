<template>
   <main>
      <Stories />
      <Posts />
   </main>
</template>

<script>
import Stories from "./Stories.vue";
import Posts from "./Posts.vue";

export default {
   name: "Main",
   components: {
      Stories,
      Posts
   }
};
</script>

<style scoped lang="scss">
main {
   width: 65%;
}
</style>
