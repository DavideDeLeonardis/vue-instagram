<template>
   <li class="post">
      <div class="post-header">
         <div>
            <img src="../../assets/images/profile.jpg" alt="Profile image" />
            <span>Nome</span>
         </div>
         <font-awesome-icon class="icon" :icon="['fas', 'ellipsis-h']" />
      </div>
      <img
         class="post-image"
         src="../../assets/images/landscape.png"
         alt="Post image"
      />
      <div class="post-footer">
         <font-awesome-icon class="icon" :icon="['far', 'heart']" />
         <font-awesome-icon class="icon" :icon="['far', 'comment']" />
         <div class="container-likes">
            <img
               class="img-like"
               src="../../assets/images/profile.jpg"
               alt="Profile image"
            />
            <div>
               Piace a <span class="bold">Trudi35</span> e
               <span class="bold">altri 4</span>
            </div>
         </div>
         <div class="caption">
            <span class="bold">Lorem, ipsum.</span>&nbsp;
            <span>Caption</span>
         </div>
         <button>Mostra tutti i 4 commenti</button>
         <div>
            <span class="bold">Lorem, ipsum.</span>&nbsp;
            <span>Lorem ipsum dolor sit amet.</span>
         </div>
         <div>
            <span class="bold">Lorem</span>&nbsp;
            <span>Lorem, ipsum dolor.</span>
         </div>
         <div>
            <span class="bold">Lorem</span>&nbsp;
            <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
         </div>
         <span class="time">33 ore fa</span>
      </div>
      <div class="input-container">
         <input type="text" placeholder="Aggiungi un commento" />
         <span>Pubblica</span>
      </div>
   </li>
</template>

<script>
export default {
   name: "Post",
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/layout/posts";
</style>
