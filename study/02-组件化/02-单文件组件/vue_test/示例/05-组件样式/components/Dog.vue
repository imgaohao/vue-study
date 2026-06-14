<template>
  <div>
    <h1 class="title">{{ name }}</h1>
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

<style scoped>
.title {
  color: red;
}
</style>
