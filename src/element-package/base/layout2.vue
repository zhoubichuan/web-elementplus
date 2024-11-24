<template>
  <web-layout :data="data">
  </web-layout>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const data = ref([
  {
    type: 'input',
    'value': 2
  },
  {
    type: 'web-input',
    value: 299
  },
  {
    type: 'web-input',
    value: 266
  }
])
</script>