<template>
  <web-layout :data="data">
  </web-layout>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const str = ref('222')
const data = ref([
  {
    type: 'web-input',
    model:str,
    component:{
    }
  },
  {
    type: 'web-input',
  },
  {
    type: 'web-input',
  },
  {
    type: 'web-input',
  }
])
</script>