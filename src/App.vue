<template>
  <div id="app">
    <div class="board">
      <canvas id="renderCanvas" width="800" height="600"></canvas>
    </div>
    <form action="getFormValues">
      <div class="options">
        <input id="10" type="radio" name="score" value="10" v-model="value" />
        <label for="10">
          10 points
        </label>
        <br />
        <input id="100" type="radio" name="score" value="100" v-model="value" />
        <label for="100">
          100 points
        </label>
        <br />
        <input id="500" type="radio" name="score" value="500" v-model="value" />
        <label for="500">
          500 points
        </label>
        <br />
        <input
          id="1000"
          type="radio"
          name="score"
          value="1000"
          v-model="value"
        />
        <label for="1000">
          1,000 points
        </label>
        <br />
        <input
          id="100000"
          type="radio"
          name="score"
          value="100000"
          v-model="value"
        />
        <label for="100000">
          100,000 points
        </label>
      </div>
      <br />
      <br />
      <input type="submit" value="Submit" />
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
      <font-awesome-icon
        v-on:click="routerOpen = !routerOpen"
        class="close"
        icon="times"
      />
      <router-view v-show="routerOpen" class="popup-container"></router-view>
    </div>
  </div>
</template>

<script>
import image from "./assets/plinko-board.jpg";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
library.add(faTimes);

export default {
  name: "app",
  data: function() {
    return { value: 10, image: image, routerOpen: false };
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
