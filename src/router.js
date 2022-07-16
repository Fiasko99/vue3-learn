import { createRouter, createWebHistory } from "vue-router";
import Main from "./components/Main";
import One from "./components/One";
import Two from "./components/Two";
import Three from "./components/Three";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', component: Main},
    {path: '/one', component: One},
    {path: '/two', component: Two},
    {path: '/three', component: Three},
  ]
})