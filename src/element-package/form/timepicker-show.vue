<template>
  <div class="example-basic">
    <web-time-picker v-model="value1" placeholder="请选择时间" type="datetimerange" />
    <web-time-picker v-model="value2" arrow-control placeholder="请选择时间" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value1 = ref()
const value2 = ref()
</script>

<style>
.example-basic .web-date-editor {
  margin: 8px;
}
</style>