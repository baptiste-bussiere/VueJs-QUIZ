

<template>
  <div>
<div class="quiz_box">
  <img src="../assets/plats-indiens.jpg" alt="">
    <div class="quiz_info">
      <span>{{message}}</span> 
      <RouterLink class="routerlink" to="/sport">Commencer</RouterLink>
    </div>
</div>
<div class="quiz_box">
  <img src="../assets/plats-indiens.jpg" alt="">
    <div class="quiz_info">
      <span>{{message}}</span> 
      <RouterLink class="routerlink" to="/pub">Commencer</RouterLink>
    </div>
</div>
<div class="quiz_box">
  <img src="../assets/plats-indiens.jpg" alt="">
    <div class="quiz_info">
      <span>{{message}}</span> 
      <RouterLink class="routerlink" to="/meteo">Commencer</RouterLink>
    </div>
</div>
<div class="quiz_box">
  <img src="../assets/plats-indiens.jpg" alt="">
    <div class="quiz_info">
      <span>{{message}}</span> 
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
