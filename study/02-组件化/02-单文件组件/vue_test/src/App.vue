<template>
  <!-- 只能写一个根元素 -->
  <div id="app">
    <h1 ref="title">ref示例</h1>
    <!-- 使用Counter组件 -->
    <Counter ref="counter1"></Counter>
    <Counter ref="counter2"></Counter>
    <button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>
  </div>
</template>

<script>
import Counter from './components/Counter.vue'

export default {
  name: 'App',
  components: {
    Counter,
  },
  methods: {
    showDOM() {
      console.log(this.$refs.title) //真实DOM元素
      console.log(this.$refs.counter1) //组件的实例对象（vc）
      console.log(this.$refs.counter2) //组件的实例对象（vc）
      console.log(this.$refs.btn) //真实DOM元素
    }
  }
}
</script>

<style>
#app {
  padding: 20px;
}
</style>
