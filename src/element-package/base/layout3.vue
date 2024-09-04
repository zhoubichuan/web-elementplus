<template>
  <web-layout :data="data">
    <template #default="{name,value}">
      <component :is="name" v-text="value"></component>
    </template>
  </web-layout>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const data = ref([
  {
    name: 'div',
    value: 234234
  },
  {
    name: 'span',
    value: 94545
  },
  {
    name: 'button',
    value: 233
  }
])
</script>