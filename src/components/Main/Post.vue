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
         <font-awesome-icon
            v-if="!colorIconVar"
            class="icon"
            :icon="['far', 'heart']"
            @click="colorIconVar = true"
         />
         <font-awesome-icon
            v-if="colorIconVar"
            class="icon icon-red"
            :icon="['fas', 'heart']"
            @click="colorIconVar = false"
         />
         <font-awesome-icon
            class="icon"
            :icon="['far', 'comment']"
            @click="focusInput()"
         />
         <div class="container-likes">
            <img
               class="img-like"
               :src="post.profile_picture"
               :alt="`${post.profile_name} image`"
            />
            <div>
               <span class="bold">{{ post.likes[0].username }}</span>
               <span v-if="post.likes.length > 1">
                  and <span class="bold">other {{ getRemainingLikes() }}</span>
               </span>
               <span v-else-if="post.likes.length == 1 && colorIconVar">
                  and <span class="bold">you</span>
               </span>
               <span v-if="post.likes.length == 1"> like</span>
               <span v-else> likes</span>
            </div>
         </div>
         <div class="caption">
            <a href="#" class="bold">{{ post.profile_name }}</a>
            &nbsp;
            <span>{{ post.post_text }}</span>
         </div>
         <button
            v-if="post.comments.length > 3 && !showAllCommentsVar"
            @click="showAllCommentsVar = true"
         >
            Show all {{ post.comments.length }} comments
         </button>
         <Comment
            v-for="(comment, index) in getComments()"
            :key="`comment-${index}`"
            :comment="comment"
         />
         <span class="time">{{ getDate() }}</span>
      </div>
      <div class="input-container">
         <input
            type="text"
            ref="comment"
            placeholder="Leave a comment"
            v-model="commentValue"
            @keyup.enter="addComment()"
         />
         <button @click="addComment()">Publish</button>
      </div>
   </li>
</template>

<script>
import Comment from "./Comment";

import dayjs from "dayjs";

export default {
   name: "Post",
   components: {
      Comment,
   },
   data() {
      return {
         showAllCommentsVar: false,
         colorIconVar: false,
         commentValue: "",
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
      focusInput() {
         this.$nextTick(() => this.$refs.comment.focus());
      },
      addComment() {
         if (this.commentValue != "") {
            this.post.comments.unshift({
               username: "Davide",
               text: this.commentValue,
            });
         }
         this.commentValue = "";
      },
      getComments() {
         if (this.post.comments.length > 3 && !this.showAllCommentsVar) {
            return this.post.comments.slice(0, 3);
         } else {
            return this.post.comments;
         }
      },
      getRemainingLikes() {
         if (!this.colorIconVar) {
            return this.post.likes.length - 1;
         } else {
            return this.post.likes.length;
         }
      },
      getDate() {
         return dayjs(this.post.date.date).format("DD/MM/YYYY");
      },
   },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/layout/posts";
</style>
