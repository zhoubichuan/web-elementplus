<template>
  <web-layout :data="data">
  </web-layout>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const data = ref([
  {
    is: 'input',
    'value': 2
  },
  {
    is: 'el-input',
    value: 299
  },
  {
    is: 'web-input',
    value: 266
  }
])
</script>