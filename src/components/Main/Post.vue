<template>
   <li class="post">
      <div class="post-header">
         <div>
            <img
               :src="post.profile_picture"
               :alt="`${post.profile_fullname} image`"
            />
            <span>{{ post.profile_fullname }}</span>
         </div>
         <font-awesome-icon class="icon" :icon="['fas', 'ellipsis-h']" />
      </div>
      <img
         class="post-image"
         :src="post.post_image"
         :alt="`${post.profile_fullname} image`"
      />
      <div class="post-footer">
         <font-awesome-icon class="icon" :icon="['far', 'heart']" />
         <font-awesome-icon class="icon" :icon="['far', 'comment']" />
         <div class="container-likes">
            <img
               class="img-like"
               :src="post.profile_picture"
               :alt="`${post.profile_name} image`"
            />
            <div>
               Piace a <span class="bold">{{ post.likes[0].username }}</span>
               <span v-if="post.likes.length > 1">
                  e <span class="bold">altri {{ post.likes.length - 1 }}</span>
               </span>
            </div>
         </div>
         <div class="caption">
            <a href="#" class="bold">{{ post.profile_name }}</a>
            &nbsp;
            <span>{{ post.post_text }}</span>
         </div>
         <button
            v-if="post.comments.length > 3 && !showAllComments"
            @click="showAllComments = true"
         >
            Mostra tutti e {{ post.comments.length }} i commenti
         </button>
         <Comment
            v-for="(comment, index) in getComments()"
            :key="`comment-${index}`"
            :comment="comment"
         />
         <span class="time">33 ore fa</span>
      </div>
      <div class="input-container">
         <input type="text" placeholder="Aggiungi un commento" />
         <span>Pubblica</span>
      </div>
   </li>
</template>

<script>
import Comment from "./Comment";

export default {
   name: "Post",
   components: {
      Comment,
   },
   data() {
      return {
         showAllComments: false,
      };
   },
   props: {
      post: {
         type: Object,
         default() {
            return {};
         },
      },
   },
   methods: {
      getComments() {
         if (this.post.comments.length > 3 && !this.showAllComments) {
            return this.post.comments.slice(0, 3);
         } else {
            return this.post.comments;
         }
      },
   },
   created() {
      console.log(this.post);
   },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/layout/posts";
</style>
