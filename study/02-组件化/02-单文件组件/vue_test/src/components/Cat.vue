<template>
  <div>
    <button @click="show">show {{ name }}</button>
  </div>
</template>

<script>
import { hunhe, hunhe2 } from '../mixin.js'

export default {
  name: 'Cat',
  data() {
    return {
      name: "小白"
    }
  },
  mixins: [hunhe, hunhe2],
  mounted() {
    console.log('Cat mounted')
  }
}
</script>

<style scoped></style>
