<template>
   <li class="storie">
      <img
         class="img-storie"
         :src="storie.profile_picture"
         :alt="`${storie.profile_name} image`"
         @click="varShowStorie = true"
      /><br />
      <div class="container-open-storie" v-if="varShowStorie">
         <span @click="varShowStorie = false">X</span>
         <img
            :src="storie.profile_picture"
            :alt="`${storie.profile_name} image`"
         />
      </div>
      <span>{{ storie.profile_name }}</span>
   </li>
</template>

<script>
export default {
   name: "Storie",
   data() {
      return {
         varShowStorie: false,
      };
   },
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
