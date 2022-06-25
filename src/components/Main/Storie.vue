<template>
   <li class="storie">
      <img :src="storie.profile_picture" :alt="`${storie.profile_name} image`" /><br>
      <span>{{ storie.profile_name }}</span>
   </li>
</template>

<script>
export default {
   name: "Storie",
   props: {
      storie: {
         type: Object,
         default() {
            return {};
         },
      },
   },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/layout/stories";
</style>
