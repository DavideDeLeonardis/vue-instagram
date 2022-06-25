<template>
   <main>
      <Stories :profiles="profiles" />
      <Posts :posts="posts" />
   </main>
</template>

<script>
import Stories from "./Stories.vue";
import Posts from "./Posts.vue";

export default {
   name: "Main",
   components: {
      Stories,
      Posts,
   },
   props: {
      profiles: {
         type: Array,
         default() {
            return [];
         },
      },
      posts: {
         type: Array,
         default() {
            return [];
         },
      },
   },
};
</script>

<style scoped lang="scss">
main {
   width: 65%;
}
</style>
