<template>
  <h1>Global component</h1>
  <input type="text" name="text" id="text" v-model="text">
  <h3>{{text}}</h3>
  <h4>Length text: {{getTextLength}}</h4>
</template>

<script>
export default {
  name: 'global-component',
  data() {
    return {
      text: 'Первичный текст'
    }
  },
  computed: {
    getTextLength() {
      return this.text.length
    }
  }
}
</script>

<style>

</style>