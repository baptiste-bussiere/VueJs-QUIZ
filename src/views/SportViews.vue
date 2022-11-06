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
    
   
          <div class="quiz_image">
            <div v-for="(img,index) in questions.slice(a,b)" :key="index">
      <img  class="box" :src="img.img"  alt="">

            </div>
     </div>
          <div class="box" v-for="(question,index) in questions.slice(a,b)" :key="index" v-show="quiz">
              
           
                
                <h1>{{question.question}}</h1>
      
      <div class="box_props">
        <li v-for="(proposition,index) in question.propositions" :key="index" class="li" @click="selectResp(proposition,index)" :class=" correct ? check(proposition) : ''">{{proposition.props}}</li>

      </div>       
                  
                
      
              
              
          </div>
          <div class="back_score" v-if="score_show">
            <div class="score">
              <navigation></navigation>
              <h1>Résultats</h1>
              <div class="result">
                 <h2 v-if="score >= 3" >Hip Hip Hip Hourra ! On dirait bien que c'est vous, le vrai champion 🎉</h2>

                <h2 v-else>Courage ! Vous ferez mieux la prochaine fois 😉 </h2>
              <h2>{{score}} point(s)</h2></div>
              <div class="back">
             
              <RouterLink class="btn" to="/marques"> <span>Prochain Quiz</span>   </RouterLink> 

                  <button class="btn" @click="restart">Recommencer le quiz</button>
      
              <RouterLink class="btn prec" to="/"> <span>Retourner au menu</span>   </RouterLink>

              </div>
             
            </div>
              
              
            
          </div>

                <div v-if="progress < 100" class="button_quiz">                   
                   <button @click="nextQuest()">Suivant</button>
                    <button class="prec" @click="skip()" >Passer la Question</button>
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
          question:"Qui à le plus de victoire en F1 ?",
          img: require("@/assets/logo.png"),
          propositions:[
            {props:'Lewis Hamilton',correct:true},
            {props:'Nicolas Latifi (goat)'},
            {props:'Ayrton Senna',},
            {props:'Michael Schumacher',}
          ]
        },
        {
          question:"Qui a le plus de ballon d'or ?",
          img:"assets/img/foot.jpg",
          propositions:[
           
            {props:'Christiano Ronaldo'},
            {props:'Zinédine Zidane',},
            {props:'Lionel Messi',correct:true},
            {props:'Karim Benzema',}
          ]
        }, {
          question:"Quel numero porte Michael Jordan ?",
          img:"assets/img/basket.jpg",
          propositions:[
            {props:'10'},
            {props:'4',},
            {props:'12',},
            {props:'23',correct:true},


          ]
        }, {
          question:"Combien de fois Rafael Nadal a gagné Roland-Garros",
          img:"assets/img/tenis.jpg",
          propositions:[
            {props:'14 fois',correct:true},
            {props:'8 fois'},
            {props:'12 fois',},
            {props:'16 fois',}
          ]
        }, {
          question:"Combien y a-il de joueur au volley ?",
          img:"assets/img/voley.jpg",
          propositions:[
            {props:'5 joueurs',},
            {props:'8 joueurs'},
            {props:'6 joueurs',correct:true},
            {props:'7 joueurs',}
          ]
        },
        {
          question:"Combien de trous y a t-il dans un terrain de golf ?",
          img:"assets/img/golf.jpg",
          propositions:[
            {props:'18 trous',correct:true},
            {props:'16 trous'},
            {props:'21 trous',},
            {props:'15 trous',}
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
    
    selectResp(e){
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
    checkStat(next){
        if (next.true) {
          return 'shake'
        }else{
          return 'blabla' 
        }
    },
    nextQuest(){
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
    skip(){
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
    
    restart(){
      
      Object.assign(this.$data, this.$options.data()); // reset data in vue
       

    },
    
  }
}
</script>


