import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";

import App from "./App.vue";
import router from "./router";
// import "@fontawesome/fontawesome-free/css/all.css";

const app = createApp(App);

app.use(VueAwesomePaginate);
app.use(ElementPlus);
app.use(createPinia());
app.use(router);
app.use(ElementPlus);
app.mount("#app");
