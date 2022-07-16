<template>
  <h1>Global component</h1>
  <input type="text" name="text" id="text" v-model="text">
  <h3>{{text}}</h3>
  <h4>Length text: {{getTextLength}}</h4>
  <u>
    <li v-for="a in arr" :key="a">{{a}}</li>
  </u>
</template>

<script>
export default {
  name: 'global-component',
  data() {
    return {
      text: 'Первичный текст',
      arr: ['one', 'two', 'three']
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