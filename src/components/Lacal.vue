<template>
  <h1>Local component</h1>
  <h3>Counter: {{counter}}</h3>
  <button @click="changeCounter(+1)">+</button>
  <button @click="changeCounter(-1)">-</button>
</template>

<script>
export default {
  name: 'local-component',
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    changeCounter(num) {
      this.counter += num
      if (this.counter < 0) this.counter = 0
    }
  }
}
</script>

<style>

</style>