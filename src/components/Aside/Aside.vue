<template>
   <aside>
      <Profile />
      <Suggestions />
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
   padding-left: 20px;
}
</style>
