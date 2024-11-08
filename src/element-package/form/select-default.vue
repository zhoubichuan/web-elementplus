<template>
    <web-select v-model="value" placeholder="请选择" style="width: 240px">
      <web-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      />
    </web-select>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  
  const value = ref('')
  const options = [
    {
      value: 'Option1',
      label: 'Option1',
    },
    {
      value: 'Option2',
      label: 'Option2',
      disabled: true,
    },
    {
      value: 'Option3',
      label: 'Option3',
    },
    {
      value: 'Option4',
      label: 'Option4',
    },
    {
      value: 'Option5',
      label: 'Option5',
    },
  ]
  </script>