<template>
    <div>
        <div>
            Plinko Board
        </div>
        <div>
          <div class="score">
            Score: {{score}}
          </div>
          <div class="button">
            Drop Ball
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
    score: 10000
}
</script>

<style scoped>

</style>
