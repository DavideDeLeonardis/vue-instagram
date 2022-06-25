<template>
   <div>
      <div class="heading">
         <h4>Recommended for you</h4>
         <span class="bold">Show all</span>
      </div>

      <ul>
         <Suggestion
            v-for="(profile, index) in profiles"
            :key="`profile-${index}`"
            :profile="profile"
         />
      </ul>
   </div>
</template>

<script>
import Suggestion from "./Suggestion";

export default {
   name: "Suggestions",
   components: {
      Suggestion,
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
@import "@/assets/scss/layout/aside";
</style>
