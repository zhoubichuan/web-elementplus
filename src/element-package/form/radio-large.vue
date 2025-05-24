<template>
  <web-radio-group v-model="value" size="large">
    <web-radio label="1">男生</web-radio>
    <web-radio label="2">女生</web-radio>
  </web-radio-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('1')
</script>