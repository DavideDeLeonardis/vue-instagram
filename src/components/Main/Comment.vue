<template>
   <div>
      <span v-if="comment.username" class="bold">{{ comment.username }}</span
      >&nbsp;
      <span>{{ comment.text }}</span>
   </div>
</template>

<script>
export default {
   name: "Comment",
   props: {
      comment: {
         type: Object,
         default() {
            return {};
         },
      },
   },
};
</script>

<style></style>
