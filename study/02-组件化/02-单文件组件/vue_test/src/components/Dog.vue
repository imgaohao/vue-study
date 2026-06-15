<template>
  <div>
    <h1 class="title">{{ name }}</h1>
    <button @click="sendDogName">给cat发送名称</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
  name: 'Dog',
  data() {
    return {
      name: "旺财"
    }
  },
  methods: {
    sendDogName() {
      pubsub.publish('sendDogName', this.name)
    }
  },
  mounted() {
    //记录订阅id
    this.subId = pubsub.subscribe('sendCatName', (eventName, data) => {
      console.log('我是dog，收到数据：', data)
    })
  },
  beforeDestroy() {
    //对订阅id进行取消订阅
    pubsub.unsubscribe(this.subId)

    //取消所有订阅
    // pubsub.unsubscribe('sendCatName')
  }
}
</script>

