<template>
  <web-input-number v-model="num" :min="1" :max="10" @change="handleChange" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const num = ref(1)
const handleChange = (value: number) => {
  console.log(value)
}
</script>