<template>
    <div>
        <label>
            <!-- <input type="checkbox" v-model="item.done"> -->

            <!-- checkbox 上面写法等价于下面的写法 -->
            <!-- <input type="checkbox" :checked="item.done" @change="item.done = $event.target.checked"> -->

            <!-- 上面2种都会更新 item.done 的值，不建议修改props中的数据 -->

            <input type="checkbox" :checked="item.done" @change="handleChange(item.id)">
            {{ item.name }}
        </label>
        <button @click="remove(item.id)">删除</button>
    </div>
</template>

<script>
export default {
    name: 'MyItem',
    props: ['item', 'checkItem', 'removeItem'],
    methods: {
        handleChange(id) {
            this.checkItem(id)
        },
        remove(id) {
            this.removeItem(id)
        }
    }
}
</script>

<style></style>