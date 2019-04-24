import Vue from "vue";
import App from "./App.vue";
import Banner from "./components/Banner.vue";

const Components = {
    App,
    Banner,
};

Object.keys(Components).forEach(name => {
   Vue.component(name, Components[name]);
});

export default Components;
