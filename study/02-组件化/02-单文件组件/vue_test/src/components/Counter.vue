<template>
  <!-- 只能写一个根元素 -->
  <div class="counter">
    <h3>计数器</h3>
    <p>计数: {{ count }}</p>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <button @click="reset">重置</button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
    reset() {
      this.count = 0
    }
  }
}
</script>

<style scoped>
.counter {
  padding: 15px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
}

button {
  margin: 5px;
  padding: 5px 15px;
  cursor: pointer;
}
</style>
