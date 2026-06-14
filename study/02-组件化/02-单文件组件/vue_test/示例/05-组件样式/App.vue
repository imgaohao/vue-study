<template>
  <div id="app">
    <h1 class="title">app</h1>
    <Cat />
    <Dog />
  </div>
</template>

<script>
// 如果组件没有加scoped属性，可能会出现样式冲突，后引入的组件的样式会覆盖先引入的组件的样式
// 父组件的样式是后引入，会覆盖子组件的样式
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

<style scoped>
.title {
  color: green;
}
</style>
