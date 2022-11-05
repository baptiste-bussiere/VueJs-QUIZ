<template>
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
    {{b}}


   </div>

</template>

<script>
export default {
 name:"progessbar",
 data() {
    return {
        b:3
    }
 },
 

};
</script>
