<template>
  <div>
    <button @click="show">show {{ name }}</button>
  </div>
</template>

<script>
export default {
  name: 'Dog',
  data() {
    return {
      name: "旺财"
    }
  },
}
</script>

<style scoped></style>
