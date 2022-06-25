<template>
   <ul class="posts">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
   </ul>
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
