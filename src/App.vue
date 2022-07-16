<template>
  <ul>
    <router-link to="/">Main</router-link> |
    <router-link to="/one">One</router-link> |
    <router-link to="/two">Two</router-link> |
    <router-link to="/three">Three</router-link>
  </ul>
  <h1>APP VUE</h1>
  <router-view></router-view>
  <div>
    <button @click="changeSelect('local')">Local</button>
    <button @click="changeSelect('global')">Global</button>
    <button @click="changeSelect('')">Nothing</button>
  </div>
  <main>
    <local-component v-if="selected == 'local'" />
    <global-component v-else-if="selected == 'global'" />
    <h1 v-else>Нет компонента</h1>
  </main>
</template>

<script>
import LocalComponent from "@/components/Lacal.vue";
export default {
  data() {
    return {
      selected: ''
    }
  },
  components: {
    LocalComponent
  },
  methods: {
    changeSelect(page) {
      this.selected = page
    }
  }
}
</script>

<style>

</style>
