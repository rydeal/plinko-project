<template>
    <div>
        <div>
            <h1>Result</h1>
        </div>
        <div class="result">
          <h2>{{result}}</h2>
          {{question}}
          {{useranswer}}
          {{correctanswer}}
          {{pointsadded}} Points

        </div>
        <div class="scorecalc">
          <h2>Score</h2>
          Old Score:
          +{{pointsadded}}
          New Score:
        </div>
        <div class="button">
          Next Turn
          </div>
    </div>
</template>

<script>
export default {
    name: "Result",
    score: 10000,
    result: "Correct",
    question: "question",
    useranswer: "User's Answer",
    correctanswer: "Correct Answer",
    pointsadded: "+1000"
}
</script>

<style scoped>

</style>
