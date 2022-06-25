<template>
   <div class="posts">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
   </div>
</template>

<script>
import Post from "./Post";

export default {
   name: "Posts",
   components: {
      Post
   }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/layout/posts";
</style>
