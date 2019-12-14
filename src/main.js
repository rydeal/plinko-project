import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Home from "./components/Home.vue";
import Question from "./components/Question.vue";
import Result from "./components/Result.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/question/:id", component: Question },
    { path: "/question", component: Question },
    { path: "/result", component: Result }
  ]
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
