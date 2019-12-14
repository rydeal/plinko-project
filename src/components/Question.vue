<template>
  <div>
    <div>
      <h1>Question:</h1>
      Question Num: {{ questionNum }} Value: {{ $route.params.id }}
    </div>
    <div>
      <div class="question">
        {{ question }}
        <form>
          <div class="options">
            <div
              class="option"
              v-for="(option, index) in options"
              v-bind:key="option"
            >
              <input
                :id="index"
                v-bind:value="index"
                v-model="answer"
                name="option"
                type="radio"
              />
              <label :for="index">{{ option }}</label>
            </div>
          </div>
          <br />
          <router-link
            type="submit"
            :to="{
              name: 'result',
              params: {
                value: this.$route.params.id,
                qNum: questionNum,
                answer: answer
              }
            }"
            >Submit Answer: {{ answer }}</router-link
          >
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import GameData from "../GameData.js";

export default {
  data: function() {
    let questionNum = Math.floor(Math.random() * 6);
    return {
      answer: "None Yet",
      questionNum: questionNum,
      value: this.$route.params.id,
      question: GameData[this.$route.params.id][questionNum].question,
      options: GameData[this.$route.params.id][questionNum].options
    };
  },
  methods: {
    // getFormValues(submitEvent) {
    //   this.value = submitEvent.target.elements.name.value;
    // }
  }
};
</script>

<style scoped></style>
