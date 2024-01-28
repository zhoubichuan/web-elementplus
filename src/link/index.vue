<template>
  <br />
  <div>
    <my-link v-model="checked1" label="1">Option 1</my-link>
    <my-link v-model="checked2" label="2">Option 2</my-link>
    <my-link v-model="checked1" label="1" disabled>Option 3</my-link>
    <my-link v-model="checked2" label="2" disabled>Option 4</my-link>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const checked1 = ref('1')
const checked2 = ref('1')
</script>
