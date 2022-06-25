<template>
   <nav>
      <img src="../assets/images/logo.png" alt="boolgram logo" />
      <input type="text" placeholder="Cerca" name="cerca" id="cerca" />
      <div class="nav-right">
         <font-awesome-icon :icon="['far', 'heart']" />
         <font-awesome-icon :icon="['fas', 'home']" />
         <img src="../assets/images/profile.jpg" alt="profile image" />
      </div>
   </nav>
</template>

<script>
export default {
   name: "Nav",
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/layout/nav.scss";
</style>
