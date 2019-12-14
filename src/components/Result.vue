<template>
  <div>
    <div>
      <h1>Result</h1>
    </div>
    <div class="result">
      <h2>Correct: {{ result }}</h2>
      The Question: {{ question }} <br />
      Your Answer: {{ useranswer }}<br />
      Correct Answer: {{ correctanswer }}<br />
      Points Added: {{ pointsadded }} Points<br />
    </div>
    <div class="scorecalc">
      <h2>Score</h2>
      Old Score: +{{ pointsadded }}<br />
      New Score: {{ userScore }}<br />
    </div>
    <div class="button">
      Next Turn
    </div>
  </div>
</template>

<script>
import GameData from "../GameData.js";

export default {
  data: function() {
    let questionNum = this.$route.params.qNum;
    let score = this.$route.params.value;
    return {
      name: "Result",
      score: score,
      result: this.$route.params.answer == GameData[score][questionNum].answer,
      question: GameData[score][questionNum].question,
      useranswer:
        GameData[score][questionNum].options[this.$route.params.answer],
      correctanswer:
        GameData[score][questionNum].options[
          GameData[score][questionNum].answer
        ],
      userScore: GameData.score
    };
  },
  created() {
    if (
      this.$route.params.answer == GameData[this.score][this.questionNum].answer
    ) {
      GameData.score += this.$route.params.value;
    }
  },
  methods: {
    // getFormValues(submitEvent) {
    //   this.value = submitEvent.target.elements.name.value;
    // }
  }
};
</script>

<style scoped></style>
