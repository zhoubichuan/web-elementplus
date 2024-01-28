<template>
  <br />
  default： <web-switch v-model="value1" />
  <br />
  <br />
  large： <web-switch size="large" v-model="value2" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(true)
</script>
