<template>
    <div class="menu_box">
    <navigation></navigation>
     <progressbar></progressbar>
     <div class="quiz_image">
      <img src="../assets/plats-indiens.jpg" alt="">
     </div>
     <h1>{{question}}</h1>
     <div class="select_response">
      <li v-for="(proposition,index) in question.propositions" :key="index" class="li" @click="selectResponse(proposition,index)" :class=" correct ? check(proposition) : ''">{{proposition.props}} <div class="fas fa-check" v-if="correct ?  proposition.correct: ''"></div><div class="fas fa-times" v-if="correct ?  !proposition.correct: ''"></div></li>

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