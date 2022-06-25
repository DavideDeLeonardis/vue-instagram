<template>
   <div id="app">
      <Nav />
      <div class="container main-container">
         <Main :data="data" />
         <Aside :profiles="data.profiles" />
      </div>
   </div>
</template>

<script>
import Nav from "@/components/Nav";
import Main from "@/components/Main/Main";
import Aside from "@/components/Aside/Aside";

import Axios from "axios";

export default {
   name: "App",
   components: {
      Nav,
      Main,
      Aside,
   },
   data() {
      return {
         api_start: "https://flynn.boolean.careers/exercises/api/boolgram",
         data: {
            profiles: [],
            posts: [],
         },
      };
   },
   methods: {
      getData(endpoint, array) {
         Axios.get(`${this.api_start}/${endpoint}`)
            .then((result) => {
               switch (array) {
                  case "profiles":
                     this.data.profiles = result.data;
                     break;
                  case "posts":
                     this.data.posts = result.data;
                     break;
               }
            })
            .catch((error) => console.error(error));
      },
   },
   created() {
      this.getData("profiles", "profiles");
      this.getData("posts", "posts");
   },
};
</script>

<style lang="scss">
@import "@/assets/scss/index.scss";
</style>
