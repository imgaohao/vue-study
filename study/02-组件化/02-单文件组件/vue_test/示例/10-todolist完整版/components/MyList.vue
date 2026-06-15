<template>
    <div>
        <MyItem v-for="item in list" :key="item.id" :item="item" />
    </div>
</template>

<script>
import MyItem from './MyItem.vue'

export default {
    name: 'MyList',
    props: ['list'],
    components: {
        MyItem,
    },
}
</script>

<style></style>