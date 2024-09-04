<template>
  <web-layout :data="data">
  </web-layout>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const str = ref('222')
const data = ref([
  {
    is: 'web-input',
    modelValue: str,
    'update:modelValue': (val: string) => str.val = val
  },
  {
    is: 'web-input',
    'value': 2
  },
  {
    is: 'web-input',
    modelValue: str,
    'update:modelValue': (val: string) => str.val = val
  },
  {
    is: 'web-input',
    'value': 2
  }
])
</script>