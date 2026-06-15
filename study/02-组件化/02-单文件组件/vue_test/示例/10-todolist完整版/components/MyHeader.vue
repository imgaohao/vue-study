<template>
  <div>
    <input type="text" placeholder="请输入待办事项" v-model="name" @keyup.enter="add">
    <button @click="add">添加</button>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'

export default {
    name: 'MyHeader',
    data() {
        return {
            name: ''
        }
    },
    methods: {
        add() {
            if (this.name.trim() === '') {
                return
            }
            this.$emit('addItem', { id: nanoid(), name: this.name, done: false })
            this.name = ''
        }
    }
}
</script>

<style>

</style>