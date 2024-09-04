<template>
  <web-input class="web-input" v-model="value" type="textarea"> </web-input>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref('11111')
</script>
