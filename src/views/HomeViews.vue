

<template>
<div class="menu_box">
  <navigation></navigation>
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
