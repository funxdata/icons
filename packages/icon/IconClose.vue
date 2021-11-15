<!--
 * @Author: dowell87
 * @Date: 2021-11-15 16:47:21
 * @Descripttion: 
 * @LastEditTime: 2021-11-15 17:05:39
-->
<template>
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :width="size+'px'" :height="size+'px'">
    <path 
    d="M282.517333 213.376l-45.354666 45.162667L489.472 512 237.162667 765.461333l45.354666 45.162667L534.613333 557.354667l252.096 253.269333 45.354667-45.162667-252.288-253.44 252.288-253.482666-45.354667-45.162667L534.613333 466.624l-252.096-253.226667z"
    stroke="currentColor"
    :fill="'#'+color"
    />
  </svg>
</template>
<script>
export default {
  name: 'iconClose',
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