<template>
   <main>
      <Stories :profiles="data.profiles" />
      <Posts :posts="data.posts" />
   </main>
</template>

<script>
import Stories from "./Stories";
import Posts from "./Posts/Posts";

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

   @media screen and (max-width: 650px) {
      & {
         width: 100%;
      }
   }
}
</style>
