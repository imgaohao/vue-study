<template>
    <div>
        <MyItem v-for="item in list" :key="item.id" :item="item" :checkItem="checkItem" :removeItem="removeItem" />
    </div>
</template>

<script>
import MyItem from './MyItem.vue'

export default {
    name: 'MyList',
    props: ['list', 'checkItem', 'removeItem'],
    components: {
        MyItem,
    },
}
</script>

<style></style>