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
  <img :src="img.img" class="box" v-for="(img,index) in questions.slice(a,b) " :key="index" alt="">

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
         
          <RouterLink class="btn" to="/sport"> <span>Prochain Quiz</span>   </RouterLink> 

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
      question:"Quel nom porte cette voiture ?",
      img:"assets/img/f410.jpeg",
      propositions:[
        {props:'Ferrari Carrera',},
        {props:'Ferrari F40',correct:true},
        {props:'Ferrari F1',},
        {props:'Mclaren Enzo',}
      ]
    },
    {
      question:"Dans quelle categorie etais engager cette voiture ?",
      img:"assets/img/s1.jpeg",
      propositions:[
       
        {props:'WRC'},
        {props:'Formule 2.0',},
        {props:'Groupe B',correct:true},
        {props:'Karting',}
      ]
    }, {
      question:"Qui à conçu ce vehicule ?",
      img:"assets/img/f1.jpeg",
      propositions:[
        {props:'Tinker Hatfield'},
        {props:'Enzo Ferrari',},
        {props:'Pierre Chabrier',},
        {props:'Gordon Murray',correct:true},


      ]
    }, {
      question:"Quelle est la marque de cette voiture ?",
      img:"assets/img/gt3rs.jpg",
      propositions:[
        {props:'Porsche',correct:true},
        {props:'Bentley'},
        {props:'Ferrari',},
        {props:'Alpine',}
      ]
    }, {
      question:"Qui a créer la marque de voiture Pagani ?",
      img:"assets/img/pagani.webp",
      propositions:[
        {props:'Valentino Pagani',},
        {props:'Enzo Maranelo'},
        {props:'Horacio Pagani',correct:true},
        {props:'Pedro De La Rosa',}
      ]
    },
    {
      question:"De quelle moteur est equipé cette voiture ?",
      img:"assets/img/carrera.jpg",
      propositions:[
        {props:'V10 atmosphérique',correct:true},
        {props:'V12 atmosphérique'},
        {props:'W16 bi-turbo',},
        {props:'V8 atmosphérique',}
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


