<template>
  <div id="app">
    <h1 class="title">app</h1>
    <!-- 前面是事件方式，也可以写成 @getName="getName" -->
    <!-- 后面是props方式 -->
    <!-- 只触发一次，@getName.once="getName" -->
    <!-- @click 也是自定义事件 ，原生事件要用@click.native -->
    <Cat ref="cat" v-on:getName="getName" :getName="getName" />
  </div>
</template>

<script>
import Cat from './components/Cat.vue'

export default {
  name: 'App',
  components: {
    Cat,
  },
  methods: {
    getName(name) {
      console.log(name)
    }
  },
  mounted() {
    // 事件方式2，给cat组件添加事件监听，更灵活，可以用setTimeout延迟执行
    // setTimeout(() => {
    //   this.$refs.cat.$on('getName', this.getName)
    // }, 1000)

    // 只触发一次
    // this.$refs.cat.$once('getName', this.getName)
  }
}
</script>

