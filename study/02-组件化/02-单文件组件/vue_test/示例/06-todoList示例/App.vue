<template>
  <div id="app">
    <MyHeader :addItem="addItem" />
    <MyList :list="list" :checkItem="checkItem" :removeItem="removeItem" />
    <MyFooter :list="list" :clearDoneItem="clearDoneItem" :checkAllItem="checkAllItem" />
  </div>
</template>

<script>
import MyItem from './components/MyItem.vue'
import MyList from './components/MyList.vue'
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
import { nanoid } from 'nanoid'

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
      list: [
        { id: nanoid(), name: '学习vue', done: false },
        { id: nanoid(), name: '学习js', done: true },
        { id: nanoid(), name: '学习css', done: false }
      ],
    }
  },
  methods: {
    addItem(item) {
      this.list.unshift(item)
    },
    checkItem(id) {
      this.list.forEach(item => {
        if (item.id === id) {
          item.done = !item.done
        }
      })
    },
    removeItem(id) {
      this.list = this.list.filter(item => item.id !== id)
    },
    clearDoneItem() {
      this.list = this.list.filter(item => !item.done)
    },
    checkAllItem(allDone) {
      this.list.forEach(item => {
        item.done = allDone
      })
    }
  }
}
</script>

<style></style>
