<template>
  <div id="app">
    <h1 ref="title">mixin示例</h1>
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
  }
}
</script>

<style></style>
