<template>
  <!-- 只能写一个根元素 -->
  <div class="user-profile">
    <h3>用户信息</h3>
    <p>姓名: {{ username }}</p>
    <p>年龄: {{ age }} 岁</p>
    <button @click="showInfo">显示信息</button>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  props: {
    username: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      default: 0
    }
  },
  methods: {
    showInfo() {
      alert(`用户: ${this.username}, 年龄: ${this.age}`)
    }
  }
}
</script>

<style scoped>
.user-profile {
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
