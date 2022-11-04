<template>
    <div class="menu_box">
    <navigation></navigation>
     <progressbar></progressbar>
     <div class="quiz_image">
      <img src="../assets/plats-indiens.jpg" alt="">
     </div>
     <h1>{{question}}</h1>
     <div class="select_response">
      <button class="response">reponse 1</button>
      <button class="response">reponse 2</button>

     </div>
     <div class="select_response">
      <button class="response">reponse 3</button>
      <button class="response">reponse 4</button>

     </div>  <button class="button">
Suivant
     </button>
       <button class="button prec">
      Précedent
     </button>
   
    </div>
</template>

<script>
import progressbar from "@/components/progress.vue";
import navigation from "@/components/nav.vue";

export default {
  name: "quiz",
  components: {
    progressbar,
    navigation

  },
  data(){
    return{
      question:"Quelle est le plat indien le plus connu ?"
    }
  }
  
};

</script>