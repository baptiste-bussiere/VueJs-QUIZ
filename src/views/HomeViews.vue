

<template>
<div class="menu_box" style="    height: 85vh;">
<h1>QUIZZZZZ'</h1>
  <quizbox></quizbox>
</div>
</template>
<script>
import quizbox from "@/components/QuizBox.vue";
import navigation from "@/components/nav.vue";

export default {
  name: "quiz",
  components: {
    quizbox,
    navigation
  },
  
};

</script>
