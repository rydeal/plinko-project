<template>
  <div id="app">
  <form action="/question" >
    <input id="10" type="radio" name="score" value="10"><label for="10">10 points</label>
    <input id="100" type="radio" name="score" value="100"><label for="100">100 points</label>
    <input type="submit" value="Submit"> 
  </form>
  <router-link to="/question/10">Question 10</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
