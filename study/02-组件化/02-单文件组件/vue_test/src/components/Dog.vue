<template>
  <div>
    <button @click="show">show {{ name }}</button>
  </div>
</template>

<script>
import { hunhe, hunhe2 } from '../mixin.js'

export default {
  name: 'Dog',
  data() {
    return {
      name: "旺财"
    }
  },
  mixins: [hunhe, hunhe2]
}
</script>

<style scoped></style>
