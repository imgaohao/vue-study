<template>
  <!-- 只能写一个根元素 -->
  <div id="app">
    <h1 ref="title">props示例</h1>
    <!-- 使用UserProfile 组件 -->
    <!-- username 没有冒号，当做普通字符串传递 -->
    <!-- age 有冒号，可以写js表达式 -->
    <UserProfile username="张三" :age="25"></UserProfile>
  </div>
</template>

<script>
import UserProfile from './components/UserProfile.vue'

export default {
  name: 'App',
  components: {
    UserProfile,
  }
}
</script>

<style>
#app {
  padding: 20px;
}
</style>
