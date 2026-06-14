<template>
  <div>
    <button @click="show">show {{ name }}</button>
  </div>
</template>

<script>
export default {
  name: 'Cat',
  data() {
    return {
      name: "小白"
    }
  },
}
</script>

<style scoped></style>
