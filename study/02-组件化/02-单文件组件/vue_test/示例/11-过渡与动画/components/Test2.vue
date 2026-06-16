<template>
  <div>
    <button @click="isShow = !isShow">切换显示</button>
    <transition appear>
      <h1 v-show="isShow">Hello</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Test2',
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

  /** 进入过程，离开过程 */
  .v-enter-active, .v-leave-active {
    transition: 0.5s;
  }

  /** 进入的起点，离开的终点 */
  .v-enter, .v-leave-to {
    transform: translateX(-100%);
  }

  /** 进入的终点，离开的起点 */
  .v-enter-to, .v-leave {
    transform: translateX(0px);
  }
</style>
