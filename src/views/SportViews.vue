<template>
  
   
        <div class="menu_box"> 
          
          <navigation></navigation>
          <div class="progress_bar">
    <div class="active progress_round" v-if="b == 1">1</div>
    <div class="progress_round" v-else>1</div>
    <div class="active progress_round" v-if="b == 2">2</div>
    <div class="progress_round" v-else>2</div>
    <div class="active progress_round" v-if="b == 3">3</div>
    <div class="progress_round" v-else>3</div>
    <div class="active progress_round" v-if="b == 4">4</div>
    <div class="progress_round" v-else>4</div>
    <div class="active progress_round" v-if="b == 5">5</div>
    <div class="progress_round" v-else>5</div>
    <div class="active progress_round" v-if="b == 6">6</div>
    <div class="progress_round" v-else>6</div>
  


   </div>    
        <h1>Question {{b}}/{{questions.length}}</h1>
   
          <div class="quiz_image">
      <img src="../assets/img/sport.jpg" alt="">
     </div>
          <div class="box" v-for="(question,index) in questions.slice(a,b)" :key="index" v-show="quiz">
              
           
                
                <h1>{{question.question}}</h1>
      
      <div class="box_props">
        <li v-for="(proposition,index) in question.propositions" :key="index" class="li" @click="selectResponse(proposition,index)" :class=" correct ? check(proposition) : ''">{{proposition.props}} <div class="fas fa-check" v-if="correct ?  proposition.correct: ''"></div><div class="fas fa-times" v-if="correct ?  !proposition.correct: ''"></div></li>

      </div>       
                  
                
      
              
              
          </div>
          <div class="box-score" v-if="score_show">
              
              
              <h2>Vous avez marqué(e)</h2>
              <h2>{{score}} point(s)</h2>
              <div class="btn-restart">
                  <button @click="restartQuiz">rejouer <i class="fas fa-sync-alt"></i></button>
              </div>
          </div>

                <div v-if="progress < 100" class="button_quiz">                   
                   <button @click="nextQuestion()">Suivant</button>
                    <button class="prec" @click="skipQuestion()" >Passer la Question</button>
          </div>
          
          
            
        </div>

</template>

<script>
import progressbar from "@/components/progress.vue";
import navigation from "@/components/nav.vue";

export default {

  components: {
    progressbar,
    navigation

  },
  data(){
    return{

      questions:[
        {
          question:"Qui à le plus de victoire en F1",
          img:"../assets/img/",
          propositions:[
            {props:'Lewis Hamilton',correct:true},
            {props:'Nicolas Latifi (goat)'},
            {props:'Ayrton Senna',},
            {props:'Michael Schumacher',}
          ]
        },
        {
          question:"Qui à le plus de victoire en F1",
          img:"../assets/img/",
          propositions:[
            {props:'Lewis Hamilton',correct:true},
            {props:'Nicolas Latifi (goat)'},
            {props:'Ayrton Senna',},
            {props:'Michael Schumacher',}
          ]
        }, {
          question:"Qui à le plus de victoire en F1",
          img:"../assets/img/",
          propositions:[
            {props:'Lewis Hamilton',correct:true},
            {props:'Nicolas Latifi (goat)'},
            {props:'Ayrton Senna',},
            {props:'Michael Schumacher',}
          ]
        }, {
          question:"Qui à le plus de victoire en F1",
          img:"../assets/img/",
          propositions:[
            {props:'Lewis Hamilton',correct:true},
            {props:'Nicolas Latifi (goat)'},
            {props:'Ayrton Senna',},
            {props:'Michael Schumacher',}
          ]
        }, {
          question:"Qui à le plus de victoire en F1",
          img:"../assets/img/",
          propositions:[
            {props:'Lewis Hamilton',correct:true},
            {props:'Nicolas Latifi (goat)'},
            {props:'Ayrton Senna',},
            {props:'Michael Schumacher',}
          ]
        },
        {
          question:"Qui à le plus de victoire en F1",
          img:"../assets/img/",
          propositions:[
            {props:'Lewis Hamilton',correct:true},
            {props:'Nicolas Latifi (goat)'},
            {props:'Ayrton Senna',},
            {props:'Michael Schumacher',}
          ]
        },
      ],
      a:0,
      b:1,
      next:true,
      score_show:false,
      quiz:true,
      score:0,
      correct:false,
      progress:0,
      
    }
  },
  methods:{
    
    selectResponse(e){
      this.correct = true;
      this.next = false;
      if (e.correct) {
        this.score++;
      }

    },
    check(status){
        if (status.correct) {
          return 'correct'
        }else{
          return 'incorrect' 
        }
    },
    checkStatus(next){
        if (next.true) {
          return 'shake'
        }else{
          return 'blabla' 
        }
    },
    nextQuestion(){
      if (this.next) {
        return;
      }
      this.progress = this.progress + (100/this.questions.length);
      if(this.questions.length - 1 == this.a){
        this.score_show = true;
        this.quiz = false;    
      }
      else{
        this.a++;
        this.b++;
        this.correct = false;
        this.next = true;
        
      }
      
    },
    skipQuestion(){
      if (!this.next) {
        return;
      }
      this.progress = this.progress + (100/this.questions.length);

      if(this.questions.length - 1 == this.a){
        this.score_show = true;
        this.quiz = false;
        
        
      }else{
        this.a++;
        this.b++;
        
      }
      
    },
    
    restartQuiz(){
      
      Object.assign(this.$data, this.$options.data()); // reset data in vue
       

    },
    
  }
}
</script>


