<template>
  <div id="app">
    <MyHeader @addItem="addItem" />
    <MyList :list="list" />
    <MyFooter :list="list" @clearDoneItem="clearDoneItem" @checkAllItem="checkAllItem" />
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
import MyItem from './components/MyItem.vue'
import MyList from './components/MyList.vue'
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'

export default {
  name: 'App',
  components: {
    MyItem,
    MyList,
    MyHeader,
    MyFooter,
  },
  data() {
    return {
      list: JSON.parse(localStorage.getItem('list')) || [],
    }
  },
  methods: {
    addItem(item) {
      this.list.unshift(item)
    },
    checkItem(_, id) {
      this.list.forEach(item => {
        if (item.id === id) {
          item.done = !item.done
        }
      })
    },
    removeItem(_, id) {
      this.list = this.list.filter(item => item.id !== id)
    },
    saveItem(_, data) {
      this.list.forEach(item => {
        if (item.id === data.id) {
          item.name = data.name
        }
      })
    },
    clearDoneItem() {
      this.list = this.list.filter(item => !item.done)
    },
    checkAllItem(allDone) {
      this.list.forEach(item => {
        item.done = allDone
      })
    }
  },
  watch: {
    list: {
      handler(newVal) {
        localStorage.setItem('list', JSON.stringify(newVal))
      },
      deep: true
    }
  },
  mounted() {
      this.subIds = [
        pubsub.subscribe('checkItem', this.checkItem),
        pubsub.subscribe('removeItem', this.removeItem),
        pubsub.subscribe('saveItem', this.saveItem)
      ]
  },
  beforeDestroy() {
      this.subIds.forEach(id => {
        pubsub.unsubscribe(id)
      })
  }
}
</script>

<style></style>
