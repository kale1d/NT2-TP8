import Vue from "vue";
import VueRouter from "vue-router";

import FormComponent from "./components/FormComponent.vue";
import UserListComponent from "./components/UserListComponent.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", redirect: "/form" },
    { path: "/form", component: FormComponent },
    { path: "/usuarios", component: UserListComponent },
  ],
});
