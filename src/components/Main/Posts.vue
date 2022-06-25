<template>
   <ul class="posts">
      <Post
         v-for="(post, index) in posts"
         :key="`post-${index}`"
         :post="post"
      />
   </ul>
</template>

<script>
import Post from "./Post";

export default {
   name: "Posts",
   components: {
      Post,
   },
   props: {
      posts: {
         type: Array,
         default() {
            return [];
         },
      },
   },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/layout/posts";
</style>
