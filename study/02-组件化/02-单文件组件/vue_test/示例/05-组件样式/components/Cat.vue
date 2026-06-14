<template>
  <div>
    <h1 class="title">{{ name }}</h1>
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
}
</script>

<!-- 加上scoped属性，组件的样式只作用于当前组件和子组件，不会影响其他组件的样式 -->
<!-- 不加scoped属性，组件的样式会作用于所有组件 -->
<style scoped>
.title {
  color: blue;
}
</style>
