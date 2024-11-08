<template>
  <el-radio-group class="web-radio-group" v-bind="$attrs">
    <slot></slot>
  </el-radio-group>
</template>
<script lang='ts'>
export default {
  name: "WebRadioGroup"
}
</script>
<style lang="scss">
.web-radio-group {
 
}
</style>
