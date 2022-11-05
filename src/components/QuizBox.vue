

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
  <img src="../assets/img/pub.jpg" alt="">
    <div class="quiz_info">
      <span>Pub</span> 
      <RouterLink class="routerlink" to="/pub">Commencer</RouterLink>
    </div>
</div>
<div class="quiz_box">
  <img src="../assets/img/meteo.jpg" alt="">
    <div class="quiz_info">
      <span>Météo</span> 
      <RouterLink class="routerlink" to="/meteo">Commencer</RouterLink>
    </div>
</div>
<div class="quiz_box">
  <img src="../assets/img/culture.JPG" alt="">
    <div class="quiz_info">
      <span>Culture</span> 
      <RouterLink class="routerlink" to="/culture">Commencer</RouterLink>
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
