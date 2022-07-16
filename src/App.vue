<template>
  <ul>
    <router-link to="/">Main</router-link> |
    <router-link to="/one">One</router-link> |
    <router-link to="/two">Two</router-link> |
    <router-link to="/three">Three</router-link>
  </ul>
  <h1>APP VUE</h1>
  <router-view></router-view>
  <main>
    <local-component />
    <global-component />
  </main>
</template>

<script>
import LocalComponent from "@/components/Lacal.vue";
export default {
  components: {
    LocalComponent
  }
}
</script>

<style>

</style>
