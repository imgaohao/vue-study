<template>
  <div id="app">
    <button @click="getData">获取数据</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  methods: {
    getData() {
      // 如果当前服务器资源存在（在public目录下有/api/aaa.txt），就会直接返回当前服务器资源，不会去目标服务器请求
      axios.get('http://localhost:8080/api/aaa.txt').then(
        res => {
          console.log(res.data)
        },
        err => {
          console.log(err)
        })
    }
  }
}
</script>
