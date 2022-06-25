<template>
   <li class="suggestion">
      <div class="content">
         <img
            :src="profile.profile_picture"
            :alt="`${profile.profile_name} image`"
         />
         <span class="bold">{{ profile.profile_name }}</span>
      </div>
      <button>Segui</button>
   </li>
</template>

<script>
export default {
   name: "Suggestion",
   props: {
      profile: {
         type: Object,
         default() {
            return {};
         },
      },
   },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/layout/aside";
</style>
