<template>
  <web-input-button class="web-input" v-model="value" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref('11111')
</script>
