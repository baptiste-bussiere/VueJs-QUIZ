

<template>
  <div>
<div class="quiz_box">
  <img src="../assets/img/sport.jpg" alt="">
    <div class="quiz_info">
      <span>Sport</span> 
      <RouterLink class="routerlink" to="/sport">Commencer</RouterLink>
    </div>
</div>
<div class="quiz_box">
  <img src="../assets/img/marques.jpeg" alt="">
    <div class="quiz_info">
      <span>Marques</span> 
      <RouterLink class="routerlink" to="/marques">Commencer</RouterLink>
    </div>
</div>
<div class="quiz_box">
  <img src="../assets/img/nature.jpeg" alt="">
    <div class="quiz_info">
      <span>Nature</span> 
      <RouterLink class="routerlink" to="/nature">Commencer</RouterLink>
    </div>
</div>
<div class="quiz_box">
  <img src="../assets/img/f40.jpeg" alt="">
    <div class="quiz_info">
      <span>Automobile</span> 
      <RouterLink class="routerlink" to="/voiture">Commencer</RouterLink>
    </div>
  </div>
</div>


</template>

<script>
export default {
  data(){
      return{
        message:"Sport" 
        //pub
        //meteo
  
        //culture
      }
    }
 

};
</script>
