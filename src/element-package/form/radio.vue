<template>
    <div class="mb-2 ml-4">
      <web-radio-group v-model="radio1">
        <web-radio value="1" size="large">Option 1</web-radio>
        <web-radio value="2" size="large">Option 2</web-radio>
      </web-radio-group>
    </div>
    <div class="web-2 ml-4">
      <web-radio-group v-model="radio2">
        <web-radio value="1">Option 1</web-radio>
        <web-radio value="2">Option 2</web-radio>
      </web-radio-group>
    </div>
    <div class="web-4 ml-4">
      <web-radio-group v-model="radio3">
        <web-radio value="1" size="small">Option 1</web-radio>
        <web-radio value="2" size="small">Option 2</web-radio>
      </web-radio-group>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  
  const radio1 = ref('1')
  const radio2 = ref('1')
  const radio3 = ref('1')
  </script>