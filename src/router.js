import { createRouter, createWebHistory } from "vue-router";
import Main from "./view/Main";
import One from "./view/One";
import Two from "./view/Two";
import Three from "./view/Three";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', component: Main},
    {path: '/one', component: One},
    {path: '/two', component: Two},
    {path: '/three', component: Three},
  ]
})