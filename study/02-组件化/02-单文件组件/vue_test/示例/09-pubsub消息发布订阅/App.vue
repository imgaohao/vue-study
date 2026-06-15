<template>
  <div id="app">
    <h1 class="title">app</h1>
    <Cat />
    <Dog />
  </div>
</template>

<script>
import Cat from './components/Cat.vue'
import Dog from './components/Dog.vue'

export default {
  name: 'App',
  components: {
    Cat,
    Dog,
  },
  methods: {
    getName(name) {
      console.log(name)
    }
  }
}
</script>

