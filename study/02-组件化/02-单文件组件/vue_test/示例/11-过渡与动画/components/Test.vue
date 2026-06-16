<template>
  <div>
    <button @click="isShow = !isShow">切换显示</button>
    <!-- 默认类名是 v-enter-active 和 v-leave-active -->
    <!-- appear属性 表示在组件挂载时就显示动画 -->
    <transition appear>
      <h1 v-show="isShow">Hello</h1>
    </transition>

    <!-- name="hello" 类名是 hello-enter-active和 hello-leave-active -->
    <!-- <transition name="hello">
      <h1 v-show="idShow">Hello</h1>
    </transition> -->

    <!-- 多个元素写法，用1个根元素包裹，对根元素添加动画类名 -->
    <!-- <transition appear>
      <div v-show="isShow">
        <h1>Hello</h1>
        <h1>Hello</h1>
      </div>
    </transition> -->

    <!-- 多个元素写法，用transition-group包裹，每个元素都要有key属性，对每个元素添加动画类名 -->
    <!-- <transition-group appear>
      <h1 v-show="isShow" key="1">Hello</h1>
      <h1 v-show="!isShow" key="2">Hello</h1>
    </transition-group> -->
  </div>
</template>

<script>
export default {
  name: 'Test',
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

/** 进入过程 */
.v-enter-active {
  animation: show 0.5s;
}

/** 离开过程，reverse表示反向播放 */
.v-leave-active {
  animation: show 0.5s reverse;
}

/** 定义动画 */
@keyframes show {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0px);
  }
}
</style>
