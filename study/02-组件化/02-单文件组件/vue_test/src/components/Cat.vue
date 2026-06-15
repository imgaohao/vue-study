<template>
  <div>
    <h1 class="title">{{ name }}</h1>
    <button @click="sendCatName">给dog发送名称</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
  name: 'Cat',
  data() {
    return {
      name: "小白"
    }
  },
  methods: {
    sendCatName() {
      pubsub.publish('sendCatName', this.name)
    },
  },
  mounted() {
    //记录订阅id
    this.subId = pubsub.subscribe('sendDogName', (eventName, data) => {
      console.log('我是cat，收到数据：', data)
    })
  },
  beforeDestroy() {
    //对订阅id进行取消订阅
    pubsub.unsubscribe(this.subId)

    //取消所有订阅
    // pubsub.unsubscribe('sendDogName')
  }
}
</script>
