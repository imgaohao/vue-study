<template>
  <div>
    <h1>{{ name | upper }}</h1>
    <input type="text" v-focus />
    <button @click="show">show</button>
    <button @click="hello">hello</button>
  </div>
</template>

<script>
export default {
  name: 'Cat',
  data() {
    return {
      name: "aaa"
    }
  },
}
</script>

<style scoped>
</style>
