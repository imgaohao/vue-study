<template>
    <div style="clear: both; width: 300px;">
        <label style="float: left;width: 50%; display: flex; align-items: center;">
            <input type="checkbox" :checked="item.done" @change="handleChange(item.id)">
            <span v-show="!idEdit" style="margin-left: 4px;">{{ item.name }}</span>
            <span v-show="idEdit" style="margin-left: 4px;">
                <input ref="nameInput" type="text" :value="item.name" @blur="save(item.id, $event)" style="width: 100%;">
            </span>
        </label>
        <div style="float: right;">
            <button @click="edit(item.id)">编辑</button>
            <button @click="remove(item.id)">删除</button>
        </div>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
    name: 'MyItem',
    data() {
        return {
            idEdit: false
        }
    },
    props: ['item'],
    methods: {
        handleChange(id) {
            pubsub.publish('checkItem', id)
        },
        remove(id) {
            pubsub.publish('removeItem', id)
        },
        edit(id) {
            this.idEdit = true
            this.$nextTick(() => {
                this.$refs.nameInput.focus()
            })
        },
        save(id, e) {
            this.idEdit = false
            const newValue = e.target?.value?.trim()
            if (newValue === '') {
                return
            }
            pubsub.publish('saveItem', {id, name: newValue})
        },
    }
}
</script>
<style></style>
