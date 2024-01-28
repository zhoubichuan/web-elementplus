<template>
  <br />
  <web-tabs v-model="activeName" @tab-click="handleClick">
    <web-tab-pane label="菜单一" name="first">内容内容内容内容内容内容内容111111111</web-tab-pane>
    <web-tab-pane label="菜单二" name="second">内容内容内容内容内容内容内容222222222</web-tab-pane>
    <web-tab-pane label="菜单三" name="third">内容内容内容内容内容内容内容3333333333</web-tab-pane>
    <web-tab-pane label="菜单四" name="fourth">内容内容内容内容内容内容内容444444444</web-tab-pane>
  </web-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const activeName = ref('first')

const handleClick = (tab: string, event: Event) => {
  console.log(tab, event)
}
</script>
