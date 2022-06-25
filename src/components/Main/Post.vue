<template>
   <div class="post">
      <div class="post-header">
         <div>
            <img src="../../assets/images/profile.jpg" alt="Profile image" />
            <span>Nome</span>
         </div>
         <font-awesome-icon :icon="['fas', 'ellipsis-h']" />
      </div>
      <img src="../../assets/images/landscape.png" alt="Post image" />
   </div>
</template>

<script>
export default {
   name: "Post",
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/layout/posts";
</style>
