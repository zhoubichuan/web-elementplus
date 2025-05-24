<template>
  <web-switch v-model="value" active-text="开" inactive-text="关" size="small"/>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(true)
</script>