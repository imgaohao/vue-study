<template>
  <div>
    <button @click="isShow = !isShow">切换显示</button>
    <!-- 
      transition-group: Vue的过渡组件，用于列表/多个元素的过渡动画
      appear: 初始渲染时是否应用过渡动画
      name: 动画基础类名，这里使用animate.css的基础类
      enter-active-class: 元素进入时的动画类，swing表示摇摆动画
      leave-active-class: 元素离开时的动画类，backInUp表示从下方弹入的动画
    -->
    <transition-group appear name="animate__animated animate__bounce" enter-active-class="animate__swing"
      leave-active-class="animate__backInUp">
      <h1 v-show="isShow" key="1">Hello</h1>
      <h1 v-show="!isShow" key="2">Hello</h1>
    </transition-group>
  </div>
</template>

<script>
import 'animate.css'

export default {
  name: 'Test3',
  data() {
    return {
      isShow: true
    }
  },
}
</script>
<style scoped>
h1 {
  background-color: orange;
}
</style>
