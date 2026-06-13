<template>
  <!-- 只能写一个根元素 -->
  <div id="app">
    <h1>单文件组件示例</h1>
    <!-- 使用Counter组件 -->
    <Counter></Counter>
    <Counter></Counter>
    <hr>
    <!-- 使用UserProfile组件 -->
    <!-- username没有冒号，当做普通字符串传递 -->
    <!-- age有冒号，可以写js表达式 -->
    <UserProfile username="张三" :age="25"></UserProfile>
  </div>
</template>

<script>
import Counter from './Counter.vue'
import UserProfile from './UserProfile.vue'

export default {
  name: 'App',
  components: {
    Counter,
    UserProfile
  }
}
</script>

<style>
#app {
  padding: 20px;
}
</style>
