<template>
    <div v-if="totalCount">
        <label>
        <input type="checkbox" v-model="allDone">
        <span>已完成 {{ doneCount }} 项 / {{ totalCount }} 项</span>
        </label>
        <button @click="clearDone">清空已完成</button>
    </div>
</template>

<script>
export default {
    name: 'MyFooter',
    props: ['list', 'clearDoneItem', 'checkAllItem'],
    computed: {
        allDone: {
            get() {
                return this.doneCount === this.totalCount && this.totalCount !== 0
            },
            set(val) {
                this.checkAllItem(val)
            },
        },
        doneCount() {
            return this.list.filter(item => item.done).length
        },
        totalCount() {
            return this.list.length
        }
    },
    methods: {
        clearDone() {
            this.clearDoneItem()
        },
    }
}
</script>

<style>

</style>