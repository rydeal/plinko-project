<template>
  <div id="app">
    <form>
      <div class="options">
        <input
          id="qValue"
          type="radio"
          name="score"
          value="10"
          v-model="value"
        />
        <label for="10">
          10 points
        </label>
        <br />
        <input id="what" type="radio" name="score" value="10" v-model="value" />
        <label for="10">
          10 points
        </label>
      </div>
      <br />
      <br />
      <router-link
        type="submit"
        :to="{ name: 'question', params: { id: value } }"
        v-on:click.native="routerOpen = !routerOpen"
        >Question Value:
        {{
          value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }}</router-link
      >
    </form>
    <br />
    <br />
    <br />
    <br />

    <div v-show="routerOpen" class="overlay">
      <a href="/" v-on:click="routerOpen = !routerOpen"
        ><font-awesome-icon class="close" icon="times"
      /></a>
      <router-view v-show="routerOpen" class="popup-container"></router-view>
    </div>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
library.add(faTimes);

export default {
  name: "app",
  data: function() {
    return { value: 10, routerOpen: false };
  },
  methods: {
    getFormValues(submitEvent) {
      this.value = submitEvent.target.elements.name.value;
    },
    onClose() {
      this.routerOpen = false;
    },
    routerToggle() {
      this.routerOpen = !this.routerOpen;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

.options {
  display: inline-block;
  text-align: left;
}

.popup-container {
  position: fixed;
  width: 60vw;
  height: 70vh;
  background-color: white;
  top: 0;
  margin-top: 15vh;
  left: 19.2vw;
  border-radius: 25px;
  border: 2px solid black;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}

.hidden {
  visibility: hidden;
}
.close {
  font-size: 50px;
  color: black;
  position: fixed;
  top: 16.5vh;
  z-index: 99;
  left: 73.5vw;
}
</style>
