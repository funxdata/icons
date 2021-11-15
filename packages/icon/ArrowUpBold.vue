<!--
 * @Author: dowell87
 * @Date: 2021-11-15 16:47:21
 * @Descripttion: 
 * @LastEditTime: 2021-11-15 17:05:07
-->
<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :width="size+'px'" :height="size+'px'">
    <path 
    d="M904.533333 674.133333l-362.666666-362.666666c-17.066667-17.066667-42.666667-17.066667-59.733334 0l-362.666666 362.666666c-17.066667 17.066667-17.066667 42.666667 0 59.733334 17.066667 17.066667 42.666667 17.066667 59.733333 0L512 401.066667l332.8 332.8c8.533333 8.533333 19.2 12.8 29.866667 12.8s21.333333-4.266667 29.866666-12.8c17.066667-17.066667 17.066667-42.666667 0-59.733334z"
    stroke="currentColor"
    :fill="'#'+color"
    />
  </svg>
</template>
<script>
export default {
  name: 'ArrowUpBold',
  props:{
    color:{
      type:String,
      default:'333333'
    },
    size:{
      type:Number,
      default:12
    }
  }
}
</script>