<template>
  <div>
    <h1 class="title">{{ name }}</h1>
    <button @click="sendCatName">给dog发送名称</button>
  </div>
</template>

<script>
export default {
  name: 'Cat',
  data() {
    return {
      name: "小白"
    }
  },
  methods: {
    sendCatName() {
      //全局事件总线触发事件
      this.$bus.$emit('sendCatName', this.name)
    }
  },
  mounted() {
    // 组件挂载完成后，对全局事件总线设置事件
    this.$bus.$on('sendDogName', (data) => {
      console.log('我是cat，收到数据：', data)
    })
  },
  beforeDestroy() {
    // 组件销毁前，自己的自定义事件不需要手动解绑，但是全局事件总线需要手动解绑事件
    this.$bus.$off('sendDogName')
  }
}
</script>
