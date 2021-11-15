<!--
 * @Author: dowell87
 * @Date: 2021-11-15 16:47:21
 * @Descripttion: 
 * @LastEditTime: 2021-11-15 17:01:06
-->
<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div>
    <icon-history size="28"></icon-history>
  </div>

</template>

<style scoped>
a {
  color: #42b983;
}
</style>
