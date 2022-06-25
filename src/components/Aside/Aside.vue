<template>
   <aside>
      <Profile />
      <Suggestions :profiles="profiles" />
   </aside>
</template>

<script>
import Profile from "./Profile.vue";
import Suggestions from "./Suggestions.vue";

export default {
   name: "Aside",
   components: {
      Profile,
      Suggestions,
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
aside {
   width: 35%;
   padding-left: 40px;

   @media screen and (max-width: 650px) {
      & {
         display: none;
      }
   }
}
</style>
