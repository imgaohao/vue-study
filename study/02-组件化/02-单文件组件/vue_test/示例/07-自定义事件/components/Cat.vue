<template>
  <div>
    <h1 class="title">{{ name }}</h1>
    <button @click="getNameFunc">获取名称</button>
    <button @click="getNameUnbind">取消名称监听</button>
    <button @click="myDestroy">销毁</button>
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
  props: ['getName'],
  methods: {
    getNameFunc() {
      //事件方式
      this.$emit('getName', this.name)
      //props方式
      this.getName(this.name)
    },
    getNameUnbind() {
      // 解绑一个自定义事件
      this.$off('getName')

      //解绑多个自定义事件
      // this.$off(['getName', 'getName2'])

      // 解绑所有自定义事件
      // this.$off()
    },
    myDestroy() {
      // 销毁组件，所有自定义事件也会被解绑
      // 子组件也会被销毁，子组件的事件也会被解绑
      // 已经绑定的DOM原生事件还在
      this.$destroy()
    }
  }
}
</script>
