<template>
    <div>
        <div>
          <h1>Question</h1>
          Question Num: {{ questionNum}}
          Value: {{ value }}
        </div>
        <div>
          <div class="question">
            {{question}}
            <form>
            <div class="options">
            <div class="option" v-for="(option, index) in options" v-bind:key="option" >
              <input :id="index" name="option" type="radio">
              <label :for="index">{{option}}</label>
            </div>
            </div>
              <button>Submit</button>
            </form>
          </div>
        </div>
    </div>
</template>

<script>


import GameData from "../GameData.js";
var questionNum;

export default {
  data: function () {
    return {
    questionNum: questionNum,
    question: GameData[10][questionNum].question,
    value: 10,
    options: ["option"]
    }
  }, 
  created: function() {
  questionNum=0;
    this.randQ();
  },
  methods:{
    randQ() {
      questionNum=  (Math.random()*6)-1;
    }
  }
  
}
</script>

<style scoped>

</style>
