<template>
   <main>
      <Stories :profiles="data.profiles" />
      <Posts :posts="data.posts" />
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
      data: {
         type: Object,
         default() {
            return {};
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
