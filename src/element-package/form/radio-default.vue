<template>
    <div class="web-2 ml-4">
      <web-radio-group v-model="radio2">
        <web-radio value="1">Option 1</web-radio>
        <web-radio value="2">Option 2</web-radio>
      </web-radio-group>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  
  const radio2 = ref('1')
  </script>