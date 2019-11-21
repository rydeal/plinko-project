<template>
    <div>
        <div>
          <h1>Question</h1>
          Value: {{value }}
        </div>
        <div>
          <div class="question">
            {{question}}
            <form>
              <input type="radio" v-for="answer in answers">
              <button>Submit</button>
            </form>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Question",
    value: 1000

}
</script>

<style scoped>

</style>
