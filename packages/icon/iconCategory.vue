<!--
 * @Author: dowell87
 * @Date: 2021-11-15 16:47:21
 * @Descripttion: 
 * @LastEditTime: 2021-11-15 17:05:44
-->
<template>
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :width="size+'px'" :height="size+'px'">
    <path 
    d="M256 734.101333v64H170.666667v-64h85.333333z m597.333333 0v64H298.666667v-64h554.666666zM256 493.184v64H170.666667v-64h85.333333z m597.333333 0v64H298.666667v-64h554.666666zM256 252.245333v64H170.666667v-64h85.333333z m597.333333 0v64H298.666667v-64h554.666666z"
    stroke="currentColor"
    :fill="'#'+color"
    />
  </svg>
</template>
<script>
export default {
  name: 'iconCategory',
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