<template>
  <web-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <web-tab-pane label="User" name="first">User</web-tab-pane>
    <web-tab-pane label="Config" name="second">Config</web-tab-pane>
    <web-tab-pane label="Role" name="third">Role</web-tab-pane>
    <web-tab-pane label="Task" name="fourth">Task</web-tab-pane>
  </web-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>
<style>
.demo-tabs > .web-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
