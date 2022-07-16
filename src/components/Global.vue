<template>
  <h1>Global component</h1>
  <input type="text" name="text" id="text" v-model="text">
  <h3>{{text}}</h3>
</template>

<script>
export default {
  name: 'global-component',
  data() {
    return {
      text: 'Первичный текст'
    }
  }
}
</script>

<style>

</style>