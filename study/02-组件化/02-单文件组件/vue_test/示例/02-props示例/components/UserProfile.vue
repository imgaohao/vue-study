<template>
  <div class="user-profile">
    <h3>用户信息</h3>
    <p>姓名: {{ username }}</p>
    <p>年龄: {{ myAge }} 岁</p>
    <button @click="showInfo">显示信息</button>
    <button @click="addAge">增加年龄1岁</button>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  data() {
    return {
      myAge: this.age
    }
  },
  // props 可以是数组 ['username', 'age']
  // 也可以是这样 {username: String, age: Number}
  // 还可以是这样 {username: {type: String, required: true}}
  // 是只读的，不能修改，比 data 数据先初始化，可以在data中使用
  props: {
    username: {
      type: String,
      required: true // 必须传递
    },
    age: {
      type: Number,
      default: 0 // 默认值
    }
  },
  methods: {
    showInfo() {
      alert(`用户: ${this.username}, 年龄: ${this.myAge}`)
    },
    addAge() {
      this.myAge++
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
