<template>
    <div style="clear: both; width: 300px;">
        <label style="float: left;width: 50%; display: flex; align-items: center;">
            <input type="checkbox" :checked="item.done" @change="handleChange(item.id)">
            <!-- 非编辑状态下显示文本 -->
            <span v-show="!idEdit" style="margin-left: 4px;">{{ item.name }}</span>
            <!-- 编辑状态下显示输入框 -->
            <span v-show="idEdit" style="margin-left: 4px;">
                <!-- 失去焦点后保存数据-->
                <input ref="nameInput" type="text" 
                :value="item.name" 
                @blur="save(item.id, $event)" style="width: 100%;">
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
            //记录当前item编辑状态
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
            // 下一次DOM更新完成后，执行指定的回调函数
            // 当改变数据后，要基于更新后的DOM元素进行操作，要在$nextTick指定的回调函数中操作
            this.$nextTick(() => {
                this.$refs.nameInput.focus()
            })
            // 这种方式也可以实现，但是更推荐用官方api的$nextTick函数
            // setTimeout(() => {
            //     this.$refs.nameInput.focus()
            // }, 0)
        },
        save(id, e) {
            this.idEdit = false
            const newValue = e.target?.value?.trim()
            if (newValue === '') {
                return
            }
            // 保存数据
            pubsub.publish('saveItem', {id, name: newValue})
        },
    }
}
</script>
<style></style>
