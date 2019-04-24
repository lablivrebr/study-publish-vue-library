import Vue from "vue";
import AppLero from "./App.vue";
import Banner from "./components/Banner.vue";

const Components = {
    AppLero,
    Banner,
};

Object.keys(Components).forEach(name => {
   Vue.component(name, Components[name]);
});

export default Components;
